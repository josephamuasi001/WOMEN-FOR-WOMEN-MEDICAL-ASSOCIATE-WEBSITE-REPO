from pydantic import BaseModel, EmailStr, Field


class EnquiryCreate(BaseModel):
    full_name: str = Field(..., min_length=2)
    email: EmailStr
    phone: str = Field(..., min_length=7)
    preferred_date: str = Field(..., min_length=1)
    service: str = Field(..., min_length=2)
    message: str = Field(..., min_length=5)
