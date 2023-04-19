from flask import Flask
from src import routes_bp
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder= Path(__file__).parent / 'src' / 'static')

app.register_blueprint(routes_bp)

if __name__ == '__main__':
    app.run(debug=True)