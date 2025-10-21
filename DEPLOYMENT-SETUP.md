# Инструкция по настройке CI/CD для проекта

## Обзор

В проекте настроен автоматический деплой на сервер Beget через GitHub Actions. Деплой запускается при создании тега версии (например, `v1.0.0`).

## Что происходит при деплое

1. **Проверка кода**: запускается ESLint и TypeScript type checking
2. **Аудит безопасности**: проверка зависимостей на уязвимости
3. **Сборка проекта**: создание production build
4. **Деплой на сервер**: копирование файлов на Beget через SSH

## Настройка GitHub Secrets

Для работы CI/CD необходимо настроить следующие секреты в репозитории GitHub:

### 1. Переход к настройкам секретов

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**

### 2. Добавление секретов

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
ssh root@84.54.29.190

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

#### VITE_SUPABASE_PROJECT_ID

- **Name**: `VITE_SUPABASE_PROJECT_ID`
- **Value**: `kfcaxhfsmmuhvemvmxas`

#### VITE_SUPABASE_PUBLISHABLE_KEY

- **Name**: `VITE_SUPABASE_PUBLISHABLE_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmY2F4aGZzbW11aHZlbXZteGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4NTQ4MDAsImV4cCI6MjA3NTQzMDgwMH0.y4UE5nrDnbdMVNPAntm6IC8wTAQg4oI3IGPKYpnrDyA`

#### VITE_SUPABASE_URL

- **Name**: `VITE_SUPABASE_URL`
- **Value**: `https://kfcaxhfsmmuhvemvmxas.supabase.co`

## Настройка сервера

### 1. Проверка директории деплоя

Убедитесь, что на сервере существует директория для деплоя:

```bash
ssh root@84.54.29.190

# Создайте директорию, если её нет
mkdir -p /var/www/alexanderlapygin.com/html

# Установите правильные права
chown -R root:root /var/www/alexanderlapygin.com
chmod -R 755 /var/www/alexanderlapygin.com
```

### 2. Настройка веб-сервера

Убедитесь, что ваш веб-сервер (Nginx/Apache) настроен на обслуживание файлов из директории `/var/www/alexanderlapygin.com/html`.

**Пример конфигурации для Nginx:**

```nginx
server {
    listen 80;
    server_name alexanderlapygin.com www.alexanderlapygin.com;
    
    root /var/www/alexanderlapygin.com/html;
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

## Запуск деплоя

### Автоматический деплой через теги

```bash
# Убедитесь, что все изменения закоммичены
git add .
git commit -m "Your commit message"

# Создайте тег версии
git tag v1.0.0

# Отправьте тег в GitHub
git push origin v1.0.0
```

### Форматирование версий

Используйте семантическое версионирование:
- **v1.0.0** - мажорная версия (breaking changes)
- **v1.1.0** - минорная версия (новый функционал)
- **v1.0.1** - патч (исправление багов)

### Мониторинг деплоя

1. Перейдите в **Actions** в вашем GitHub репозитории
2. Найдите запущенный workflow "Deploy to Beget"
3. Отслеживайте выполнение каждого шага
4. В случае ошибки, проверьте логи конкретного шага

## Проверка деплоя

После успешного деплоя:

1. Откройте сайт в браузере: `https://alexanderlapygin.com`
2. Проверьте консоль разработчика на наличие ошибок
3. Убедитесь, что все функции работают корректно

## Возможные проблемы и решения

### Ошибка SSH подключения

```
Permission denied (publickey)
```

**Решение:**
- Проверьте, что публичный ключ добавлен в `~/.ssh/authorized_keys` на сервере
- Убедитесь, что приватный ключ правильно добавлен в GitHub Secrets
- Проверьте права доступа к `.ssh` директории на сервере (700) и `authorized_keys` (600)

### Ошибка при сборке

```
npm ERR! code ELIFECYCLE
```

**Решение:**
- Проверьте логи сборки в GitHub Actions
- Убедитесь, что все Supabase переменные окружения правильно настроены
- Проверьте, что проект собирается локально: `npm run build`

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

## Отключение автоматического деплоя

Если необходимо временно отключить автоматический деплой:

1. Перейдите в **Settings** → **Actions** → **General**
2. В разделе "Actions permissions" выберите "Disable actions"

Или удалите/переименуйте файл `.github/workflows/deploy.yml`

## Откат к предыдущей версии

Если деплой прошел некорректно:

```bash
# Создайте новый тег на предыдущем коммите
git checkout <предыдущий-коммит>
git tag v1.0.1-rollback
git push origin v1.0.1-rollback
```

Или восстановите файлы на сервере вручную:

```bash
ssh root@84.54.29.190
cd /var/www/alexanderlapygin.com
# Восстановите из бэкапа или предыдущей версии
```

## Рекомендации

1. **Создавайте бэкапы** перед каждым деплоем
2. **Тестируйте локально** перед созданием тега
3. **Используйте staging окружение** для проверки изменений
4. **Документируйте изменения** в changelog или commit messages
5. **Мониторьте логи** после деплоя

## Контакты и поддержка

При возникновении проблем:
- Проверьте логи GitHub Actions
- Проверьте логи веб-сервера на сервере
- Обратитесь к документации Beget или GitHub Actions
