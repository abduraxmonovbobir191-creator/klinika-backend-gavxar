# Gavxar Clinic - Backend API

Umumiy backend server for Gavxar Clinic system.

## Tech Stack
- Node.js + Express
- PostgreSQL + Prisma
- JWT Authentication

## Setup

1. Clone the repo
2. `npm install`
3. Copy `.env.example` to `.env` and set your `DATABASE_URL`
4. `npx prisma generate`
5. `npx prisma migrate dev --name init`
6. `npm run dev`

## Models
- User (patients, doctors, admins)
- Doctor
- Appointment

## Status
Database connected with Prisma. Ready for migrations.

Clinic: Gavxar Clinic
