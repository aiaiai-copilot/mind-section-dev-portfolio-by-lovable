# Руководство по редактированию сайта Mind/Section

## Home (src/pages/Home.tsx)

### Hero Section
**Где найти:** Начало страницы, контейнер с текстом "Mind/Section"

**Что редактировать:**
- Название бренда: `"Mind/Section"`
- Основной заголовок: `"Fullstack Developer Crafting"`
- Подзаголовок: `"Reliable code that grows with your business"` и `"Easy to develop, extend, and maintain by teams"`
- Блок специализации:
  - Заголовок блока: `"Specialization"`
  - Подзаголовок: `"Specification Driven Development"`
  - Описание: текст начинается с "Creating web applications focused on long-term development..."
- Кнопка: `"Start Your Project"`

### Featured Projects Section
**Где найти:** Секция с заголовком "Featured Projects"

**Что редактировать:**
- Заголовок секции: `"Featured Projects"`
- Описание секции: `"Real-world applications built with maintainability at the core"`
- Проекты (2 карточки):
  - **E-Commerce Platform**
    - Описание: `"Multi-tenant architecture with comprehensive API documentation"`
    - Особенности: 3 пункта со значком CheckCircle
  - **SaaS Dashboard**
    - Описание: `"Real-time analytics platform with modular component system"`
    - Особенности: 3 пункта со значком CheckCircle
- Кнопка: `"View All Projects"`

### Testimonials Section  
**Где найти:** Секция с заголовком "Client Success Stories"

**Что редактировать:**
- Заголовок секции: `"Client Success Stories"`
- Описание секции: `"Long-term partnerships built on reliable, maintainable code"`
- Для каждого отзыва (массив `testimonials`):
  - `quote` - текст отзыва
  - `author` - имя автора
  - `role` - должность и компания

**Текущие отзывы:**
1. Sarah Chen, CTO, TechStart Inc.
2. Marcus Rodriguez, Lead Developer, Scale Systems

### Call to Action
**Где найти:** Последняя секция с текстом "Ready to Build Something Maintainable?"

**Что редактировать:**
- Заголовок: `"Ready to Build Something Maintainable?"`
- Описание: `"Let's discuss your project and create a specification that sets your team up for long-term success."`
- Кнопки: `"Get Started Today"` и `"View Our Work"`
