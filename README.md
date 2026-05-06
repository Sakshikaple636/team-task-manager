# Team Task Manager (Full-Stack)

## Overview
A full-stack web application for managing projects, assigning tasks, tracking progress, and role-based user access (Admin/Member).

## Features
- User Signup/Login
- Role-based Access Control
- Project Creation & Management
- Task Assignment & Tracking
- Dashboard Analytics
- Overdue Task Monitoring

## Tech Stack

### Backend:
- Spring Boot
- MySQL
- Spring Data JPA
- REST APIs

### Frontend:
- React.js
- Bootstrap
- Axios
- React Router DOM

## Database
- users
- projects
- project_members
- tasks

## Running Locally

### Backend:
Run Spring Boot on:
http://localhost:8083

### Frontend:
npm install
npm start

## API Endpoints
- POST /api/auth/signup
- POST /api/auth/login
- GET /api/projects
- POST /api/projects
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/{id}
- GET /api/tasks/dashboard

## Deployment
Backend: Railway  
Frontend: Vercel / Netlify

## Author
Sakshi Dinesh Kaple