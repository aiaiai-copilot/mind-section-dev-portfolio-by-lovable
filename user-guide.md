# Руководство по редактированию сайта Mind/Section

## Home (src/pages/Home.tsx)

### Hero Section
**Где найти:** Начало страницы, контейнер с текстом "Mind/Section"

**Что редактировать:**
- Название бренда: `"Mind/Section"`
- Заголовок: `"Fullstack Developer"`
- Подзаголовок: `"Crafting Maintainable Web Experiences"`
- Описание: текст про "Specification Driven Development" (начинается с "I specialize in Specification Driven Development...")
- Кнопки: `"View My Work"` и `"Contact Me"`

### Featured Projects Section
**Где найти:** Секция с заголовком "Featured Projects"

**Что редактировать:**
- Заголовок секции: `"Featured Projects"`
- Для каждого проекта (массив `featuredProjects`):
  - `title` - название проекта
  - `description` - описание проекта
  - `features` - список ключевых особенностей (массив строк)

**Текущие проекты:**
1. E-Commerce Platform
2. Healthcare Management System
3. Financial Dashboard

### Testimonials Section  
**Где найти:** Секция с заголовком "Client Success Stories"

**Что редактировать:**
- Заголовок секции: `"Client Success Stories"`
- Для каждого отзыва (массив `testimonials`):
  - `quote` - текст отзыва
  - `author` - имя автора
  - `role` - должность и компания

**Текущие отзывы:**
1. Sarah Johnson, CTO at TechCorp
2. Michael Chen, Product Manager at StartupXYZ
3. Emily Rodriguez, Lead Developer at InnovateLabs

### Call to Action
**Где найти:** Последняя секция с текстом "Ready to Start Your Project?"

**Что редактировать:**
- Заголовок: `"Ready to Start Your Project?"`
- Описание: текст под заголовком (начинается с "Let's discuss how Specification Driven Development...")
- Текст кнопок: `"Get In Touch"` и `"View Portfolio"`
