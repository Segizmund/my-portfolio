---
order: 13
id: "telegram-support-desk"
category: "pet-project"
titleRu: "Панель администратора Telegram-поддержки"
titleUs: "Telegram Support Helpdesk & Live Chat Panel"
descriptionRu: "Веб-сервис для обработки обращений из Telegram-бота: интерактивный чат с пользователями, архив диалогов, аналитика и статистика заявок."
descriptionUs: "Web application for managing Telegram bot inquiries: live admin chat, user conversation archives, ticketing analytics, and request metrics."
previewUrl: "/projects/telegram-support/preview.jpg"
arrayImgUrls:
  - "/projects/telegram-support/slide-1.jpg"
  - "/projects/telegram-support/slide-2.jpg"
  - "/projects/telegram-support/slide-3.jpg"
aboutRu: |
  Пет-проект для автоматизации работы службы поддержки через Telegram. Сервис связывает Telegram-бота с панелью оператора в режиме реального времени. Пользователь задает вопрос боту, а администратор обрабатывает обращение через веб-интерфейс. В системе реализован удобный модуль переписки, история закрытых чатов и аналитический дашборд со статистикой новых и обработанных тикетов.
aboutUs: |
  A pet project designed to streamline Telegram customer support. The service connects a Telegram bot with an admin dashboard in real time. Incoming user messages stream into a web workspace where administrators send direct replies, archive solved conversations, and review operational metrics such as new ticket counts and resolution rates.
tasksRu:
  - title: "Интеграция с Telegram Bot API"
    text: "Настройка взаимодействия через Webhook для мгновенного приема входящих сообщений пользователей и отправки ответов администратора."
  - title: "Реактивный интерфейс оператора"
    text: "Разработка двухпанельного интерфейса на React и Inertia.js для удобной переписки, переключения между диалогами и просмотра архива."
  - title: "Дашборд аналитики и тикетов"
    text: "Проектирование панели метрик с отслеживанием количества активных, закрытых и новых заявок за выбранные периоды."
tasksUs:
  - title: "Telegram Bot API Integration"
    text: "Configuring Webhook handling for instant incoming message reception and routing admin replies back to Telegram users."
  - title: "Reactive Operator Workspace"
    text: "Building a dual-pane React and Inertia.js interface for smooth conversation switching, live messaging, and archive filtering."
  - title: "Analytics & Ticket Dashboard"
    text: "Designing a metrics dashboard tracking real-time status of pending, active, and resolved support inquiries."
stack:
  - "laravel"
  - "inertia"
  - "react"
  - "tailwind"
  - "vite"
---