from flask import Flask, render_template, request, redirect, url_for
from db import db
from utils.validations import *
import hashlib
import filetype
import os

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)

conn = db.getConection()
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agregar-hincha')
def agregarHincha():
    return render_template('agregar-hincha.html')

@app.route('/agregar-artesano')
def agregarArtesano():
    tiposArtesania = db.getTipoArtesania(conn)
    return render_template('agregar-artesano.html', tipos = tiposArtesania)

@app.route('/informacion-hincha')
def informacionHincha():
    return render_template('informacion-hincha.html')

@app.route('/informacion-artesano')
def informacionArtesano():
    return render_template('informacion-artesano.html')

@app.route('/ver-hinchas')
def verHinchas():
    return render_template('ver-hinchas.html')

@app.route('/ver-artesanos')
def verArtesanos():
    return render_template('ver-artesanos.html')

@app.route('/post-artesanos', methods=['POST'])
def post_artesano():
     if request.method == 'POST':
        region = request.form.get("region")
        comuna = request.form.get("comuna")
        artesania = request.form.getlist("artesania")
        descripcion = request.form.get("descripcion")
        photo = request.files.get("photo")
        photo2 = request.files.get("photo2")
        photo3 = request.files.get("photo3")
        nombre = request.form.get("name")
        email = request.form.get("mail")
        telefono = request.form.get("phone")
        if validarArtesano(region, comuna, artesania, photo, photo2, photo3, nombre, email, telefono, conn):
            #agregar artesano a la base de datos
            db.addArtesano(conn, comuna, descripcion, nombre, email, telefono)
            #agreagar el tipo del artesano
            for t in artesania:
                db.addArtesanoTipo(conn, t, comuna, descripcion, nombre, email, telefono)

            #agregar las fotos si corresponde
            if photo != None and photo.filename != "" :
                _filename = hashlib.sha256(
                    secure_filename(photo.filename) # nombre del archivo
                    .encode("utf-8") # encodear a bytes
                    ).hexdigest()
                _extension = filetype.guess(photo).extension
                img_filename = f"{_filename}.{_extension}"

                # 2. save img as a file
                photo.save(os.path.join(app.config["UPLOAD_FOLDER"], img_filename))
                # subir link a la base dato
                db.addArtesanoFoto(conn, img_filename, comuna, descripcion, nombre, email, telefono)
            if photo2 != None and photo2.filename != "" :
                _filename = hashlib.sha256(
                    secure_filename(photo2.filename) # nombre del archivo
                    .encode("utf-8") # encodear a bytes
                    ).hexdigest()
                _extension = filetype.guess(photo2).extension
                img2_filename = f"{_filename}.{_extension}"

                # 2. save img as a file
                photo2.save(os.path.join(app.config["UPLOAD_FOLDER"], img2_filename))
                # subir link a la base dato
                db.addArtesanoFoto(conn, img2_filename, comuna, descripcion, nombre, email, telefono)
            if photo3 != None and photo3.filename != "" :
                _filename = hashlib.sha256(
                    secure_filename(photo3.filename) # nombre del archivo
                    .encode("utf-8") # encodear a bytes
                    ).hexdigest()
                _extension = filetype.guess(photo3).extension
                img3_filename = f"{_filename}.{_extension}"

                # 2. save img as a file
                photo3.save(os.path.join(app.config["UPLOAD_FOLDER"], img3_filename))
                # subir link a la base dato
                db.addArtesanoFoto(conn, img3_filename, comuna, descripcion, nombre, email, telefono)
            
            return redirect(url_for("index"))
        else:
            tiposArtesania = db.getTipoArtesania(conn)
            return redirect(url_for("agregarArtesano"))

if __name__ == '__main__':
    app.run(debug=True)