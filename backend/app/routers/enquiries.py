from fastapi import APIRouter, HTTPException

from app.schemas.enquiry import EnquiryCreate

router = APIRouter(prefix="/api", tags=["enquiries"])


@router.get("/health")
def health_check():
    return {"status": "healthy"}


@router.get("/services")
def get_services():
    return [
        "General Consultation",
        "Antenatal Care",
        "Family Planning",
        "Ultrasound",
        "Laboratory Services",
        "Women's Wellness",
    ]


@router.post("/enquiries")
def submit_enquiry(enquiry: EnquiryCreate):
    return {
        "success": True,
        "message": "Appointment enquiry submitted successfully.",
    }
