from flask import Flask
from routes import routes
from config import init_db

app = Flask(__name__)
app.register_blueprint(routes)

# Initialize the database
init_db()

if __name__ == '__main__':
    app.run(debug=True, port=5000)