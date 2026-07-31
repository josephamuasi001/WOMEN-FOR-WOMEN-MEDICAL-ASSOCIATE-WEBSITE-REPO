from fastapi import APIRouter, HTTPException

from app.schemas.enquiry import EnquiryCreate

from app.database import supabase


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
    try:
        data = {
            "full_name": enquiry.full_name,
            "email": enquiry.email,
            "phone": enquiry.phone,
            "preferred_date": enquiry.preferred_date,
            "service_requested": enquiry.service,
            "message": enquiry.message,
        }

        response = (
            supabase
            .table("appointment_enquiries")
            .insert(data)
            .execute()
        )

        return {
            "success": True,
            "message": "Appointment enquiry submitted successfully.",
            "data": response.data,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )