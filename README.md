# Trumate – Roommate Finder Web App

Trumate is a MERN stack web application that helps students find compatible roommates based on preferences, lifestyle, and location.

## Tech Stack

Frontend: React (Vite), Tailwind CSS  
Backend: Node.js, Express.js  
Database: MongoDB  


## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/priyal-pandey/trumate.git
cd trumate
```

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```

The frontend will run on:
http://localhost:5173

### 3. Backend Setup
```bash
cd server
npm install
```

Create a .env file inside the server folder:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:
```bash
npm start
```

The backend will run on:
http://localhost:5000

### 4. Database Setup
Create a MongoDB cluster (MongoDB Atlas recommended).
Add your connection string to the .env file as MONGO_URI

### 5. Environment Variables

Backend .env:
```bash
PORT=5000
MONGO_URI=your_mongodb_uri
```

### 6. Running the Full App
Start backend:
```bash
cd server
node index.js
```

Start frontend:
```bash
cd client
npm run dev
```

### Folder Structure
```bash
trumate/
├── client/        # Frontend (React + Vite)
├── server/        # Backend (Express + MongoDB)
└── README.md
```