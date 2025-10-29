from fastapi import FastAPI, Depends, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal
from models import Recipe  # SQLAlchemy model
from schemas import RecipeCreate, RecipeOut  # Pydantic schemas
from auth import router as auth_router
import shutil
import os

# --- Database initialization ---
Base.metadata.create_all(bind=engine)

# --- App setup ---
app = FastAPI(title="FlavorMate API")

# --- CORS setup ---
origins = [
    "http://localhost:8081",
    "http://127.0.0.1:8081",
    "http://localhost",
    "http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Include authentication router ---
app.include_router(auth_router)

# --- Dependency ---
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- CRUD Routes ---
@app.get("/recipes", response_model=list[RecipeOut])
def get_recipes(db: Session = Depends(get_db)):
    return db.query(Recipe).all()

@app.post("/recipes", response_model=RecipeOut)
def create_recipe(recipe: RecipeCreate, db: Session = Depends(get_db)):
    db_recipe = Recipe(**recipe.dict(), owner_id=1)  # Replace owner_id with actual user later
    db.add(db_recipe)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe

@app.put("/recipes/{recipe_id}", response_model=RecipeOut)
def update_recipe(recipe_id: int, recipe: RecipeCreate, db: Session = Depends(get_db)):
    db_recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not db_recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")
    for key, value in recipe.dict().items():
        setattr(db_recipe, key, value)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe

@app.delete("/recipes/{recipe_id}")
def delete_recipe(recipe_id: int, db: Session = Depends(get_db)):
    db_recipe = db.query(Recipe).filter(Recipe.id == recipe_id).first()
    if not db_recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")
    db.delete(db_recipe)
    db.commit()
    return {"message": "Recipe deleted successfully"}

# --- Optional image upload endpoint ---
@app.post("/upload")
def upload_image(file: UploadFile = File(...)):
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)  # ensure folder exists
    file_path = os.path.join(upload_dir, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"image_url": f"/{file_path}"}
