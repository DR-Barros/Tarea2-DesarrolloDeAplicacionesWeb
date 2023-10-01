from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/agregar-hincha')
def agregarHincha():
    return render_template('agregar-hincha.html')

@app.route('/agregar-artesano')
def agregarArtesano():
    return render_template('agregar-artesano.html')

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


if __name__ == '__main__':
    app.run(debug=True)