# Инструкция по настройке CI/CD для деплоя через GitHub Actions

## Обзор

Эта инструкция описывает настройку автоматического деплоя Vite React приложения на сервер через GitHub Actions. Деплой запускается при создании тега версии (например, `v1.0.0`).

## Этапы деплоя

1. **Проверка кода**: запускается ESLint и TypeScript type checking
2. **Аудит безопасности**: проверка зависимостей на уязвимости
3. **Сборка проекта**: создание production build
4. **Деплой на сервер**: копирование файлов на сервер через SSH

## Настройка GitHub Secrets

### Переход к настройкам секретов

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**

### Необходимые секреты

#### SSH_PRIVATE_KEY

Приватный SSH ключ для подключения к серверу.

**Создание SSH ключа:**

```bash
# Генерация ED25519 ключа (рекомендуется)
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/deploy_key

# Или RSA ключа (если ED25519 не поддерживается)
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f ~/.ssh/deploy_key
```

**Настройка на сервере:**

```bash
# Подключитесь к серверу
ssh YOUR_USERNAME@YOUR_SERVER_IP

# Добавьте публичный ключ в authorized_keys
cat >> ~/.ssh/authorized_keys << EOF
# Вставьте содержимое deploy_key.pub здесь
EOF

# Установите правильные права
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

**Добавление в GitHub:**

- **Name**: `SSH_PRIVATE_KEY`
- **Value**: Содержимое файла `deploy_key` (приватный ключ)

```bash
# Скопировать приватный ключ
cat ~/.ssh/deploy_key
# Скопируйте весь вывод, включая строки BEGIN и END
```

#### Переменные окружения проекта

Добавьте все необходимые переменные окружения, которые используются при сборке:

- **VITE_SUPABASE_PROJECT_ID**: ID вашего Supabase проекта
- **VITE_SUPABASE_PUBLISHABLE_KEY**: Публичный ключ Supabase
- **VITE_SUPABASE_URL**: URL вашего Supabase проекта
- Другие переменные, специфичные для вашего проекта

## Настройка сервера

### Подготовка директории деплоя

```bash
# Подключитесь к серверу
ssh YOUR_USERNAME@YOUR_SERVER_IP

# Создайте директорию для деплоя
mkdir -p /var/www/YOUR_DOMAIN/html

# Установите правильные права
chown -R YOUR_USERNAME:YOUR_USERNAME /var/www/YOUR_DOMAIN
chmod -R 755 /var/www/YOUR_DOMAIN
```

### Настройка веб-сервера

**Пример конфигурации для Nginx:**

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN www.YOUR_DOMAIN;
    
    root /var/www/YOUR_DOMAIN/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кеширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Для Apache:**

```apache
<VirtualHost *:80>
    ServerName YOUR_DOMAIN
    ServerAlias www.YOUR_DOMAIN
    DocumentRoot /var/www/YOUR_DOMAIN/html
    
    <Directory /var/www/YOUR_DOMAIN/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Перенаправление на index.html для SPA
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

## Настройка GitHub Workflow

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    tags:
      - 'v*'

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Cache dependencies
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Install dependencies
        run: npm install

      - name: Security audit
        run: npm audit --audit-level=moderate

      - name: Run ESLint
        run: npm run lint

      - name: TypeScript type check
        run: npx tsc --noEmit

      - name: Build project
        run: npm run build
        env:
          # Добавьте все необходимые переменные окружения
          VITE_SUPABASE_PROJECT_ID: ${{ secrets.VITE_SUPABASE_PROJECT_ID }}
          VITE_SUPABASE_PUBLISHABLE_KEY: ${{ secrets.VITE_SUPABASE_PUBLISHABLE_KEY }}
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}

      - name: Setup SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_ed25519
          chmod 600 ~/.ssh/id_ed25519
          ssh-keyscan -H YOUR_SERVER_IP >> ~/.ssh/known_hosts

      - name: Deploy to Server
        run: |
          scp -i ~/.ssh/id_ed25519 -r dist/* YOUR_USERNAME@YOUR_SERVER_IP:/var/www/YOUR_DOMAIN/html
```

**Важные параметры для замены:**
- `YOUR_SERVER_IP` - IP адрес вашего сервера
- `YOUR_USERNAME` - имя пользователя на сервере
- `YOUR_DOMAIN` - ваш домен

## Запуск деплоя

### Создание тега и запуск деплоя

```bash
# Убедитесь, что все изменения закоммичены
git add .
git commit -m "Your commit message"

# Создайте тег версии
git tag v1.0.0

# Отправьте тег в GitHub
git push origin v1.0.0
```

### Семантическое версионирование

- **v1.0.0** - мажорная версия (breaking changes)
- **v1.1.0** - минорная версия (новый функционал)
- **v1.0.1** - патч (исправление багов)

### Мониторинг деплоя

1. Перейдите в **Actions** в вашем GitHub репозитории
2. Найдите запущенный workflow
3. Отслеживайте выполнение каждого шага
4. В случае ошибки, проверьте логи конкретного шага

## Проверка деплоя

После успешного деплоя:

1. Откройте сайт в браузере
2. Проверьте консоль разработчика на наличие ошибок
3. Убедитесь, что все функции работают корректно
4. Проверьте работу на мобильных устройствах

## Возможные проблемы и решения

### Ошибка SSH подключения

```
Permission denied (publickey)
```

**Решение:**
- Проверьте, что публичный ключ добавлен в `~/.ssh/authorized_keys` на сервере
- Убедитесь, что приватный ключ правильно добавлен в GitHub Secrets
- Проверьте права доступа к `.ssh` директории (700) и `authorized_keys` (600)
- Убедитесь, что используется правильный тип ключа (ED25519 или RSA)

### Ошибка при сборке

```
npm ERR! code ELIFECYCLE
```

**Решение:**
- Проверьте логи сборки в GitHub Actions
- Убедитесь, что все переменные окружения правильно настроены
- Проверьте, что проект собирается локально: `npm run build`
- Проверьте совместимость версий Node.js

### Ошибка ESLint или TypeScript

**Решение:**
- Запустите проверки локально:
  ```bash
  npm run lint
  npx tsc --noEmit
  ```
- Исправьте найденные ошибки
- Закоммитьте изменения и создайте новый тег

### Ошибка аудита безопасности

```
found X vulnerabilities
```

**Решение:**
```bash
# Обновите зависимости с исправлениями безопасности
npm audit fix

# При необходимости принудительное обновление
npm audit fix --force

# Проверьте обновления
npm audit
```

### Файлы не появляются на сервере

**Решение:**
- Проверьте права доступа к директории деплоя
- Убедитесь, что путь в команде `scp` правильный
- Проверьте, что папка `dist` создается при сборке
- Проверьте логи деплоя в GitHub Actions

## Дополнительные настройки

### Backup перед деплоем

Добавьте шаг создания бэкапа в workflow:

```yaml
- name: Backup current version
  run: |
    ssh -i ~/.ssh/id_ed25519 YOUR_USERNAME@YOUR_SERVER_IP \
    "cd /var/www/YOUR_DOMAIN && tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz html/"
```

### Уведомления о деплое

Добавьте уведомления в Slack, Discord или email при успешном/неудачном деплое.

### Деплой в несколько окружений

Настройте разные workflows для staging и production окружений:
- `staging` ветка → staging сервер
- теги `v*` → production сервер

## Откат к предыдущей версии

### Через новый тег

```bash
# Создайте новый тег на предыдущем коммите
git checkout <предыдущий-коммит>
git tag v1.0.1-rollback
git push origin v1.0.1-rollback
```

### Восстановление из бэкапа

```bash
ssh YOUR_USERNAME@YOUR_SERVER_IP
cd /var/www/YOUR_DOMAIN
tar -xzf backup-YYYYMMDD-HHMMSS.tar.gz
```

## Рекомендации

1. **Создавайте бэкапы** перед каждым деплоем
2. **Тестируйте локально** перед созданием тега
3. **Используйте staging окружение** для проверки изменений
4. **Документируйте изменения** в changelog или commit messages
5. **Мониторьте логи** после деплоя
6. **Настройте SSL/HTTPS** для production окружения
7. **Используйте переменные окружения** для конфиденциальных данных
8. **Ограничьте доступ** к GitHub Secrets только необходимым людям

## Безопасность

- Никогда не коммитьте приватные ключи в репозиторий
- Используйте SSH ключи только для деплоя
- Регулярно обновляйте зависимости
- Следите за уязвимостями через `npm audit`
- Ограничьте права доступа на сервере
- Используйте разные ключи для разных проектов