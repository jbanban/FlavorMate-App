from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True)
    email = Column(String(100), unique=True, index=True, nullable=True)
    bio = Column(Text, nullable=True)
    password = Column(String(200))

    recipes = relationship("Recipe", back_populates="owner")

class Recipe(Base):
    __tablename__ = "recipes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    ingredients = Column(Text)
    instructions = Column(Text)
    image_url = Column(String, nullable=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="recipes")
