from flask import Flask
from routes import routes
from config import init_db
from flask_cors import CORS


app = Flask(__name__)
app.register_blueprint(routes)

# Initialize the database
init_db()

CORS(app)

if __name__ == '__main__':
    app.run(debug=True, port=5000)