from flask import Blueprint, render_template
from pathlib import Path
from flask import request
from .helpers.kaeli import ejecutar_kaeli

path:Path = Path(__file__).parent

routes_bp = Blueprint('routes_bp', __name__, template_folder= path / 'templates')

@routes_bp.get('/')
def index():
    return render_template('index.html')

@routes_bp.post('/ejecutar')
def ejecutar():
    codigo:str = request.json.get('codigo')
    return {"res": "ok"}
    try:
        return {"res": ejecutar_kaeli(codigo)}
    except:
        return {"status": False}