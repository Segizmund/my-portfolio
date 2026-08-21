---
order: 4
id: "field-accounting-system"
category: "main"
titleRu: "Система учёта сельхозполей и метеомониторинга"
titleUs: "Agricultural Field Management & Weather System"
descriptionRu: "Интерактивный сервис для контроля сельскохозяйственных полей: векторные SVG-карты участков, интеграция с MapLibre GL и визуализация погодных слоёв в реальном времени."
descriptionUs: "Interactive agricultural field management system: SVG field plots, MapLibre GL integration, and real-time weather layer visualization."
previewUrl: "/projects/field-accounting/preview.jpg"
arrayImgUrls:
  - "/projects/field-accounting/slide-1.jpg"
  - "/projects/field-accounting/slide-2.jpg"
  - "/projects/field-accounting/slide-3.jpg"
aboutRu: |
  Веб-сервис для учёта сельскохозяйственных полей и отслеживания метеоусловий. Система связывает данные с интерактивными SVG-схемами участков и геокартой MapLibre GL, выводит подробную информацию по каждому полю при клике, а также накладывает динамические погодные слои (облачность, осадки, направление ветра) на основе OpenWeatherMap API.
aboutUs: |
  Web application for agricultural field management and real-time weather monitoring. The system connects field data with interactive SVG schematics and MapLibre GL maps, displaying detailed field metrics on click and overlaying dynamic weather layers (clouds, precipitation, wind direction) powered by OpenWeatherMap API.
tasksRu:
  - title: "Интерактивная SVG-карта полей"
    text: "Отображение векторных схем участков с возможностью выбора локации, подсветкой при наведении и выводом подробной карточки поля по клику."
  - title: "Интеграция MapLibre GL и OWM API"
    text: "Подключение стороннего метео-API для получения реальных точек данных и отрисовки слоёв облачности на геокарте."
  - title: "Анимация погодных эффектов"
    text: "Реализация динамических эффектов дождя, снега и анимации направления ветра как для карты MapLibre GL, так и для векторных SVG-карт."
tasksUs:
  - title: "Interactive SVG Field Mapping"
    text: "Rendering vector field plots with location selection, hover highlights, and detailed field metrics on click."
  - title: "MapLibre GL & OWM API Integration"
    text: "Fetching live weather data via OpenWeatherMap API to plot cloud coverage and coordinates on an interactive map."
  - title: "Dynamic Weather Animations"
    text: "Simulating atmospheric effects (rain, snow, wind direction) across both MapLibre GL viewports and SVG schematics."
stack:
  - "laravel"
  - "react"
  - "inertia"
  - "maplibre"
  - "tailwind"
  - "vite"
---