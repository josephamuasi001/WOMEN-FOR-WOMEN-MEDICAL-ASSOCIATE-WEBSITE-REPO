from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    full_name: str = Field(..., min_length=2)
    email: EmailStr
    subject: str = Field(..., min_length=5)
    message: str = Field(..., min_length=10)
