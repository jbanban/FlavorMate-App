from pydantic import BaseModel
from typing import List, Optional

class RecipeBase(BaseModel):
    title: str
    ingredients: str
    instructions: str
    image_url: Optional[str] = None

class RecipeCreate(RecipeBase):
    pass

class Recipe(RecipeBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True

class LoginRequest(BaseModel):
    username: str
    password: str
    
class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    recipes: List[Recipe] = []

    class Config:
        from_attributes = True

class UserOut(UserBase):
    id: int

    class Config:
        from_attributes = True