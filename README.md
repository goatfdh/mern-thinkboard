<div align="center">

# 🧠 ThinkBoard

### A Modern Full-Stack Notes Management Application

Create, edit, organize, and manage your ideas with a clean and responsive interface built using the MERN Stack.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styled-38BDF8?logo=tailwindcss)

</div>

---

<div align="center">

<a href="https://mern-thinkboard-1-0eue.onrender.com/" target="_blank">
  <img src="https://img.shields.io/badge/Live-Demo-green?style=for-the-badge" alt="Live Demo">
</a>

</div>

---

## 📖 Overview

ThinkBoard is a full-stack MERN application that allows users to create, update, delete, and organize notes through a modern, responsive interface.

The project demonstrates real-world full-stack development practices including RESTful APIs, MongoDB integration, responsive UI design, environment configuration, middleware implementation, and deployment.

---

## ✨ Features

- 📝 Create new notes
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 📋 View all saved notes
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS + DaisyUI
- ⚡ Fast React frontend powered by Vite
- 🔒 Rate limiting for API protection
- 🌐 RESTful API architecture
- ☁️ MongoDB database integration
- 🚀 Production-ready deployment

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- DaisyUI
- Axios
- React Router

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Other Tools

- Upstash Redis (Rate Limiting)
- dotenv
- CORS
- Nodemon

---

# 📂 Project Structure

```
mern-thinkboard/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/goatfdh/mern-thinkboard.git

cd mern-thinkboard
```

---

## 2. Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5001

MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_url

UPSTASH_REDIS_REST_TOKEN=your_upstash_token

NODE_ENV=development
```

Start the backend server:

```bash
npm run dev
```

---

## 3. Frontend Setup

Open another terminal.

```bash
cd frontend

npm install

npm run dev
```

The frontend will typically run on

```
http://localhost:5173
```

---

# 🌍 Environment Variables

| Variable | Description |
|-----------|-------------|
| PORT | Backend Port |
| MONGO_URI | MongoDB Connection String |
| UPSTASH_REDIS_REST_URL | Upstash Redis URL |
| UPSTASH_REDIS_REST_TOKEN | Upstash Redis Token |
| NODE_ENV | development / production |

---

# 📸 Screenshots

> Add your screenshots here

Example:

```
screenshots/
    home.png
    create-note.png
    edit-note.png
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/notes | Get all notes |
| GET | /api/notes/:id | Get note by ID |
| POST | /api/notes | Create note |
| PUT | /api/notes/:id | Update note |
| DELETE | /api/notes/:id | Delete note |

---

# 💡 Learning Objectives

This project helped me strengthen my understanding of:

- Full Stack MERN Development
- REST API Design
- MongoDB & Mongoose
- React Hooks
- Component-based Architecture
- Backend Middleware
- API Rate Limiting
- Environment Variables
- Deployment
- Clean Folder Structure

---

# 🚀 Future Improvements

- User Authentication
- Dark / Light Theme Toggle
- Rich Text Editor
- Categories & Tags
- Search & Filter
- Pagination
- Note Pinning
- Markdown Support
- Image Uploads
- User Accounts

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Add New Feature"
```

4. Push to the branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# ⭐ Show your support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

<div align="center">

Made with ❤️ using the MERN Stack

</div>
