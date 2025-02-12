# Web Labeling Application

A web application for spatial relation labeling with Next.js frontend, NestJS backend, and PostgreSQL database.

## Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- Git

## Quick Deployment

### 1. Clone the Repository


### 2. Environment Setup

Create a `.env` file in the root directory with the same as `.env.example`.


### 3. Docker Deployment

For production deployment:

```bash
docker compose up -d
```

For local development:

```bash
docker compose up
```


The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- Database: localhost:5432

### 4. Local Development

#### Frontend

```bash
cd frontend
npm run dev
```

#### Backend

```bash
cd backend
yarn install
yarn start:dev
```


## Project Structure
web-labeling/
├── frontend/ # Next.js frontend application
├── backend/ # NestJS backend application
└── docker-compose.yaml

## Features

- User authentication
- Spatial relation labeling interface
- PostgreSQL database integration
- Docker containerization
- Environment configuration

## Technologies

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: NestJS, Prisma ORM
- Database: PostgreSQL
- Containerization: Docker
