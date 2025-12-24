<p align="center">
  <img src="https://img.shields.io/badge/Online%20Art%20Gallery-By%20Shaik%20Sadik-ffffff?style=for-the-badge&logo=canvas&logoColor=000000" alt="Online Art Gallery">
</p>

<h1 align="center">🎨 Online Art Gallery</h1>
<p align="center">A modern full-stack art gallery platform built by <b>Shaik Sadik</b></p>

---

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20(Vite)-61DAFB?style=for-the-badge&logo=react&logoColor=000000" />
  <img src="https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL%20(Supabase)-336791?style=for-the-badge&logo=postgresql&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Payments-Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/Deployed%20On-Vercel%20%7C%20Render-000000?style=for-the-badge&logo=vercel&logoColor=ffffff" />
</p>

---

A complete **Online Art Gallery Platform** built using modern full-stack technologies.  
Users can explore artworks, view details, and purchase them securely through **Razorpay**.  
The platform includes protected routes and authentication using **JWT**, with the backend powered by **Spring Boot** and data stored in **PostgreSQL (Supabase)**.

---

## 🌐 Live Demo

- **Frontend (Vercel):**  
  👉 https://onlineartgallery.slayercore.me/

- **Backend (Render API):**  
  👉 https://onlineartgallery-project.onrender.com

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React (Vite), Axios, React Router, Toastify |
| **Backend** | Spring Boot (REST API), JWT Security |
| **Database** | PostgreSQL (Hosted on Supabase) |
| **Payment Gateway** | Razorpay |
| **Deployment** | Frontend → Vercel<br>Backend → Render<br>Database → Supabase |

---

## ✨ Features

- 👤 **User Signup/Login with JWT Authentication**  
- 🖼 **Browse Artworks**  
- 🔒 **Protected Routes** (User must login to View / Buy Artwork)  
- 🛒 **Buy Now with Razorpay Payment Gateway**  
- 👨‍💼 **Admin Panel – Add, Edit, Delete Artworks**  
- 📱 **Fully Responsive UI**

---

## 🖼️ Screenshots

### Home Page
> ![Home Page](OnlineArtGallery-Frontend/public/home.png)

### Artworks Page
> ![Artworks Page](OnlineArtGallery-Frontend/public/Artworks.png)

---

## ⚡ Quick Start (Local Setup)

Follow these steps to run the project locally 👇

---

### 1️⃣ Project Structure

```bash
OnlineArtGallery-Project/
│
├── OnlineArtGallery-Frontend/                   # React Frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── OnlineArtGallery-Backend/                    # Spring Boot Backend
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── pom.xml
│   └── Dockerfile
│
└── README.md
