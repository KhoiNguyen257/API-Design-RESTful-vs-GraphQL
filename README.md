[README.md](https://github.com/user-attachments/files/27745636/README.md)
# 📚 Library Management System — RESTful vs GraphQL

> **Midterm Essay — Web Programming & Applications (503073)**
> Semester 2, Academic Year 2025–2026 | Ton Duc Thang University

A full-stack Library Management System demonstrating and comparing **RESTful API** and **GraphQL** side by side on the same backend. Built to illustrate over-fetching, under-fetching, and the N+1 problem in a real environment.

---

## Team Members

| Student ID | Full Name | Role |
|------------|-----------|------|
| [524H0135] | [Nguyễn Phan Anh Tuấn] | frontend, GraphQL Schema, Report |
| [524H0114] | [Võ Khôi Nguyên] | backend, REST API, Demo |

**Supervisor:** Dr. Le Van Vang

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js v18, Apollo Client v3, Axios |
| REST Backend | Node.js v20, Express.js v4 |
| GraphQL Backend | Apollo Server v4 |
| ORM | Sequelize v6 |
| Database | PostgreSQL v15 |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| API Docs | Swagger UI (REST) · Apollo Sandbox (GraphQL) |

---

## Prerequisites

Make sure you have the following installed before running the project:

- [Node.js v20 LTS](https://nodejs.org/) or higher
- [PostgreSQL v15](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/)
- npm v9+ (comes with Node.js)

---
##  1. Environment Variables Template (.env)

Create a file named `.env` in the **root directory** (the same folder as `server.js`) and add the following configuration:

```env
# Server Configuration
PORT=5000

# Database Configuration (PostgreSQL)
DB_NAME=library_db
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost

 2. Step-by-Step Setup Instructions
Ensure you have Node.js and PostgreSQL installed on your system before proceeding.

Step 2.1: Backend Setup (Server)
Open your terminal in the project's root directory (LIBRARY-PROJECT).

Install backend dependencies:

##
npm install

Initialize the database with sample data (Seeding). This will create tables and populate them with Authors and Books:

##
node seed.js

Start the Backend server (Runs both REST and GraphQL concurrently):

##
node server.js

Success indicators: "REST API: http://localhost:5000/api/books" and " GraphQL: http://localhost:5000/graphql"

Step 2.2: Frontend Setup (Client)
Open a new terminal and navigate to the frontend directory:

##
cd frontend
Install frontend dependencies:

##
npm install
Start the React development server:

##
npm run dev
Success indicator: The application will be available at http://localhost:5173.

3. Testing Credentials & Endpoints (Run Test)
The system uses pre-seeded data for performance benchmarking, so no admin login is required for the live demo.

Main Dashboard (Performance Demo)
URL: http://localhost:5173

How to test: 1. Open the URL in your browser.
2. Open DevTools (F12) and go to the Network tab.
3. Click Run REST Test to see the 831-byte bloated payload.
4. Click Run GraphQL Test to see the optimized 224-byte payload.

RESTful API Endpoint
URL: http://localhost:5000/api/books

Expected Result: Returns a full JSON array including IDs, descriptions, and timestamps (Over-fetching).

GraphQL Sandbox
URL: http://localhost:5000/graphql

How to test: Execute the following query to see specific data retrieval:

GraphQL
query {
  books {
    title
    author {
      name
    }
  }
}
4. Project Structure
The project follows a modular 3-tier architecture:

config/: Contains db.js for PostgreSQL connection via Sequelize.

frontend/: The React.js (Vite) application including ComparisonPanel.jsx for benchmarking.

graphql/: Contains typeDefs.js (Schema) and resolvers.js (Logic) for Apollo Server.

models/: Defines database schemas for Author, Book, and Category using Sequelize.

routes/: Contains bookRoutes.js for handling RESTful API endpoints.

server.js: Main entry point that initializes the Express app and Apollo Server.

seed.js: Script to populate the database with initial demonstration data.

.env: Configuration file for environment variables (Database credentials).

.gitignore: Specifies files and folders to be ignored by Git (e.g., node_modules).

## 📽️ Presentation Video

> Video link: https://drive.google.com/drive/folders/1enwcPUhd-n5yFHJG60PgIK8x4GbIMg3H?usp=sharing
> git hub: https://github.com/KhoiNguyen257/API-Design-RESTful-vs-GraphQL

---

## 📄 License

This project is submitted as academic coursework for **WEB PROGRAMMING & APPLICATIONS — 503073** at Ton Duc Thang University. All rights reserved.
