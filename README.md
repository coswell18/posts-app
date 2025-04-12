# Angular CRUD de Publicaciones con GoRest API

Este proyecto es una prueba técnica basada en Angular para consumir la API pública de [GoRest](https://gorest.co.in/). Permite realizar un CRUD de publicaciones, usando Reactive Forms, manejo de token, y diseño con Bootstrap siguiendo los lineamientos de [gov.co](https://cdn.www.gov.co/v4/).

---

## 🚀 Tecnologías utilizadas

- Angular 19
- RxJS
- Bootstrap 5
- TypeScript
- GoRest API
- CDN Gov.co
- Linter + Prettier

---

## 📦 Configuración

- Configura el token el el archivo environment.ts  "apiToken", 
el token se encuentra en el archivo token.txt adjunto en el correo.

---

## 📦 Instalación


npm install

ng serve -o

Luego abre http://localhost:4200 en tu navegador.

/src
 ├── /app
 │    ├── /core              # Servicios generales de consumo del endpoint
 │    ├── /shared            # Componentes reutilizables
 │    ├── /post          # CRUD de posts (create, edit, list, delete)
 │    ├── /models            # Interfaces TypeScript (Post, User, etc.)
 │    ├── /environments      # Variables de entorno
 │    ├── app.module.ts      # Módulo principal
 │    └── app-routing.module.ts # Ruteo
 └── /assets                # Estáticos (logo, imágenes, fuentes)

---

## 📦 Buenas prácticas implementadas
  
Versionamiento con Git

Uso de Linter + Prettier

Token oculto en environment.ts, debes configurar el token allí.

Código limpio y modularizado