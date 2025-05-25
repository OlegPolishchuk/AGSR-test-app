# Next.js Todo Application

## Запуск проекта

Убедитесь, что у вас установлен Node.js (v18+). Затем выполните:

```bash
# Установка зависимостей
npm install
# или
yarn install
# или
pnpm install
# или
bun install

# Запуск development сервера
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```

Приложение будет доступно по адресу: http://localhost:3000

## Тестовые данные для авторизации
Используйте следующие данные для входа:

## Email: test@mail.com
## Password: 123

## Особенности реализации
📡 API Next.js используется только для моковой авторизации

📦 Все операции с задачами (CRUD) реализованы на клиенте с помощью Zustand

🔐 Состояние сохраняется только в локальном хранилище браузера

🎭 Работа с формами через React Hook Form + Zod валидацию

## Используемые технологии
### Основной стек
Next.js 15	Фреймворк для server-side рендеринга

React 19	Библиотека для построения UI

Zustand 5	Управление клиентским состоянием

Tailwind CSS 4	Стилизация компонентов

shadcn/ui (на базе Radix UI)	Доступные UI компоненты

react-hook-form + @hookform/resolvers + zod - работа с формами и валидация

sonner - Toast-уведомления
