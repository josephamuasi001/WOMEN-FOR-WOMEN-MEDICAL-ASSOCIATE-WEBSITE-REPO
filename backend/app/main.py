from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.enquiries import router as enquiries_router
from app.routers.contact import router as contact_router

app = FastAPI(title="WFWMA API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(enquiries_router)
app.include_router(contact_router)
