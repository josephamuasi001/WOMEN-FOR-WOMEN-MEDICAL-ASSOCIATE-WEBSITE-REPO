from fastapi import APIRouter

from app.schemas.contact import ContactCreate

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact")
def submit_contact(contact: ContactCreate):
    return {
        "success": True,
        "message": "Your message was received. Our team will get back to you shortly.",
    }
