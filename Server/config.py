from mongoengine import connect
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

def init_db():
    mongo_uri = os.getenv("MONGO_URI")
    connect(host=mongo_uri)
