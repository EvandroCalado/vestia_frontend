# Vestia

## 📚 Overview
This project implements an authentication system using **Strapi** as a headless CMS backend and **Next.js 15** as the frontend. The application allows user registration, login, logout, and session management.

## 🚀 Technologies Used

- **Strapi** (Backend)
- **Next.js 15** (Frontend)
- **TypeScript**
- **TailwindCSS** (Styling)

## 🛠️ Features

- New user registration
- Authentication and authorization with JWT
- Route protection in Next.js
- Session persistence
- Secure logout
- Authentication-based redirection

## 📦 Project Structure

📂 frontend (Next.js 15)
```
.editorconfig
.gitignore
.next/
package.json
public/
README.md
│ ├── src/ │
│ ├── actions/
│ │ ├── app/
│ │ ├── components/
│ │ ├── lib/
│ │ ├── services/
│ │ ├── styles/
tailwind.config.ts
tsconfig.json
```


## ⚙️ Directory Structure
- **actions**: Contains server actions.
- **app**: Contains pages and layouts.
- **components**: Contains reusable application components.
- **lib**: Contains utilities and helper functions.
- **services**: Contains services for communication with the Strapi backend.
- **styles**: Contains style files.

## ⚙️ Backend Configuration

1. Create a Strapi project:
    ```bash
    npx create-strapi-app@latest
    ```

2. Start the server with the command:
    ```bash
    npm run develop
    ```

3. Open the admin panel:
    ```bash
    Open http://localhost:1337/admin in your browser to log in.
    ```

⚙️ Frontend Configuration

1. Clone the frontend repository:
    ```bash
    git clone https://github.com/EvandroCalado/vestia_frontend
    cd vestia_frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the server with the command:
    ```bash
    npm run dev
    ```
4. Open the project:
    ```bash
    Open http://localhost:3000 in your browser to see the result.
    ```

## 🔑 Routes
- Home: /
- Sign In: /signin
- Sign Up: /signup
- Dashboard (temp protected route): /dashboard

## 📝 Contribution
- Contributions are welcome! Open an issue or submit a PR with improvements.

## 📄 License
T- his project is licensed under the MIT License.

## 🤝 Contact
- Author: Evandro Calado
- Email: evandrocalado07@gmail.com

Made with ❤️ by Evandro Calado 🚀


