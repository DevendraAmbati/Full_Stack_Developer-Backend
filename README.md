Tech Stack
🔹 Frontend
React.js (Vite)
Tailwind CSS
Axios
React Router DOM
🔹 Backend
Node.js
Express.js
JWT Authentication
Bcrypt (password hashing)
🔹 Database
PostgreSQL
Sequelize ORM
✨ Features Implemented
🔐 Authentication
User Signup
User Login
Password hashing using bcrypt
JWT-based authentication
Protected routes
📋 Task Management (Multi-User)
Create task
View only logged-in user tasks
Update task (Edit title & toggle status)
Delete task
User-task relationship maintained (no global tasks)
🎨 UI Features
Responsive design (mobile + desktop)
Clean SaaS-style UI using Tailwind
Navbar with authentication state
Dashboard-style task layout
⚙️ Setup Instructions
📁 1. Clone Repository
git clone https://github.com/DevendraAmbati/Full_Stack_Developer-Backend.git
cd task-manager
🔧 Backend Setup
cd backend
npm install
Create .env file in backend:
PORT=5000
DB_NAME=taskdb
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
JWT_SECRET=your_secret_key
Run backend:
npm run dev


💻 Frontend Setup

npm install
npm run dev
🗄️ Database Setup (PostgreSQL)
Open PostgreSQL
Create database:
CREATE DATABASE taskdb;
Make sure credentials match .env
🔗 API Endpoints
Auth
POST /api/auth/signup
POST /api/auth/login
Tasks (Protected)
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
🔐 Authentication Flow
User logs in
Server returns JWT token
Token stored in localStorage
Token sent in headers for protected routes
🌍 Deployment
Frontend:
Vercel / Netlify
📸 Screens (Optional)
Home Page
Login Page
Signup Page
Task Dashboard
🧠 Key Highlights
Proper MVC backend structure
Secure authentication using JWT
Sequelize ORM with relationships
Clean and responsive UI
Real-world SaaS architecture
📎 Submission Links
🔗 GitHub Repo Backend: https://github.com/DevendraAmbati/Full_Stack_Developer-Backend.git
🔗 GitHub Repo frontend: https://github.com/DevendraAmbati/Full_Stack_Developer-Frontend.git
🌐 Live App: https://full-stack-developer-frontend.vercel.app/
💼 Portfolio: https://devendra-portfolio-murex.vercel.app/
👨‍💻 Author

Devendra Ambati
Frontend Developer | React JS Developer
