from datetime import date
from pydantic import BaseModel, EmailStr, Field

class EnquiryCreate(BaseModel):
    full_name: str = Field(..., min_length=2)
    email: EmailStr
    phone: str = Field(..., min_length=7)
    preferred_date: date
    service: str = Field(..., min_length=2)
    message: str = Field(..., min_length=5)