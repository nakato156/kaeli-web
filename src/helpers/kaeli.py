from os import getenv
from pathlib import Path
from subprocess import Popen

def ejecutar_kaeli(codig:str) -> str:
    return Popen([Path(getenv("KAELI_PATH")), "temp.ae"], shell=True).stdout.read().decode("utf-8")