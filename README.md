# Product Management Dashboard

## Description
A responsive Admin Dashboard application for managing products. It provides user authentication and full CRUD operations for products via an external API.

**Purpose**: Allows administrators to securely log in and handle product inventory: view lists, add new items with images, edit details, and delete entries.

## Features
- **Authentication**: User registration, login, token-based auth, logout.
- **Dashboard UI**: Sidebar navigation, dynamic top navigation with profile & page title.
- **Product Management**:
  - View all products in a sortable table.
  - Add product (name, price, image upload).
  - Edit product details.
  - Delete with confirmation popup.
- **Responsive Design**: Mobile-first layout using TailwindCSS.
- **Custom Components**: Reusable Form, Input, MainBtn, Table, Nav, SideBar, PopUp.

## Technologies & Programs Used
| Category | Technologies |
|----------|--------------|
| Framework | React ^19.2.4, React Router DOM ^7.13.2 |
| Build Tool | Vite ^5.4.8 |
| Styling | TailwindCSS ^4.2.2 (@tailwindcss/vite) |
| HTTP/API | Axios ^1.14.0 |
| Icons | React Icons ^5.6.0 |
| Linting | ESLint ^9.39.4 |
| API Backend | https://vica.website/api/ (register, login, logout, items CRUD) |

## Quick Start
```bash
npm install
npm run dev
```
- Development server: http://localhost:5173
- Build: `npm run build`
- Lint: `npm run lint`

## Project Structure
```
Dashoard/
├── public/assets/img/ - Static images
├── src/
│   ├── components/ - UI Components (Form/, Nav/, Table/, etc.)
│   ├── Pages/ - Views (Dashboard.jsx, Products.jsx, Add.jsx, etc.)
│   ├── main.jsx - Router setup
│   └── index.css - Global styles
├── package.json
├── vite.config.js
└── README.md
```

## API Integration
- Auth: POST /register, /task-login, /logout
- Products: GET/POST/DELETE /items, GET/PUT /items/:id (with auth token)

This project demonstrates modern React patterns with routing, API integration, and responsive UI.

