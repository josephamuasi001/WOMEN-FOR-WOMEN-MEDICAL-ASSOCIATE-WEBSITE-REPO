# WOMEN-FOR-WOMEN-MEDICAL-ASSOCIATE-WEBSITE-REPO
# Women for Women Medical Associates (WFWMA)

## Project Overview

The Women for Women Medical Associates (WFWMA) website is a modern healthcare web application developed as part of the DCIT 208 Software Engineering course.

Sprint 1 delivers the first working prototype (v0.1), providing a responsive homepage and a working appointment enquiry workflow using React and FastAPI.

---

## Features

- Responsive homepage
- Modern healthcare UI
- Navigation bar
- Hero section
- Statistics section
- About preview
- Services preview
- Appointment enquiry form
- FastAPI REST API
- Form validation
- React and FastAPI integration

---

## Technology Stack

Frontend
- React
- Vite
- React Router
- Axios

Backend
- FastAPI
- Python
- Pydantic
- Uvicorn

Version Control
- Git
- GitHub

---

## Project Structure

WFWMA L200 PROJECT/

├── frontend/

├── backend/

├── docs/

└── README.md

---

## Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Running the Backend

```bash
cd backend
uvicorn app.main:app --reload --port 8001
```

Backend runs at:

```
http://127.0.0.1:8001
```

Swagger API documentation:

```
http://127.0.0.1:8001/docs
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/health | Health check |
| GET | /api/services | Retrieve healthcare services |
| POST | /api/enquiries | Submit appointment enquiry |

---

## Sprint 1 Status

Completed

- Homepage UI
- Appointment enquiry workflow
- FastAPI backend
- React integration
- API validation

Planned for Sprint 2

- Save enquiries to Supabase
- Authentication
- Admin dashboard
- Additional pages
- Email notifications

---

## Release

Current release:

v0.1-prototype

---

## Authors

DCIT 208 Software Engineering Project

University of Ghana