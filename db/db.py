import pymysql

def getConection():
    conn = pymysql.connect(
        db='tarea2',
        user= 'cc5002',
        passwd= 'programacionweb',
        host= 'localhost',
        charset='utf8'
    )
    return conn

#devuelve un array con los tipos de las artesanias
def getTipoArtesania(conn):
    sql = "SELECT * FROM tipo_artesania"
    cursor = conn.cursor()
    cursor.execute(sql)
    tipos = cursor.fetchall()
    return tipos

#devuelve un array con (id, región)
def getRegion(conn):
    sql = "SELECT * FROM region"
    cursor = conn.cursor()
    cursor.execute(sql)
    region = cursor.fetchall()
    return region

#devuelve un array con (id, nombre, región_id)
def getComuna(conn):
    sql = "SELECT * FROM comuna"
    cursor = conn.cursor()
    cursor.execute(sql)
    comuna = cursor.fetchall()
    return comuna

#devuelve un array con los 
def getArtesanos(conn):
    sql = "SELECT a.id, c.nombre, a.nombre, celular FROM artesano a, comuna c WHERE a.comuna_id = c.id ORDER BY id DESC LIMIT 0, 5"
    cursor = conn.cursor()
    cursor.execute(sql)
    artesanos = cursor.fetchall()
    return artesanos

def getArtesanoFoto(conn):
    sql = "SELECT ruta_archivo, nombre_archivo FROM foto, (SELECT id FROM artesano ORDER BY id DESC LIMIT 0, 5) a WHERE artesano_id = a.id "
    cursor = conn.cursor()
    cursor.execute(sql)
    fotos = cursor.fetchall()
    return fotos

def getArtesanoTipo(conn):
    sql = "SELECT ta.nombre, a.id FROM tipo_artesania ta, artesano_tipo at, (SELECT id FROM artesano ORDER BY id DESC LIMIT 0, 5) a WHERE at.artesano_id = a.id AND  at.tipo_artesania_id = ta.id"
    cursor = conn.cursor()
    cursor.execute(sql)
    tipos = cursor.fetchall()
    return tipos


def addArtesano(conn, comuna, descripcion, nombre, email, celular):
    sql = "INSERT INTO artesano (comuna_id, descripcion_artesania, nombre, email, celular) VALUES (%s,%s,%s,%s,%s)"
    cursor = conn.cursor()
    cursor.execute(sql, (comuna, descripcion, nombre, email, celular))
    conn.commit()

def addArtesanoTipo(conn, tipo, comuna, descripcion, nombre, email, celular):
    sqlArtesano = 'SELECT id FROM artesano WHERE comuna_id=%s AND descripcion_artesania=%s  AND nombre=%s AND email=%s  AND celular=%s'
    cursor = conn.cursor()
    artesano = cursor.execute(sqlArtesano, (comuna, descripcion, nombre, email, celular))
    sql = "INSERT INTO artesano_tipo (artesano_id, tipo_artesania_id) VALUES (%s,%s)"
    cursor.execute(sql, (artesano, tipo))
    conn.commit()

def addArtesanoFoto(conn, ruta, foto, comuna, descripcion, nombre, email, celular):
    sqlArtesano = 'SELECT id FROM artesano WHERE comuna_id=%s AND descripcion_artesania=%s  AND nombre=%s AND email=%s  AND celular=%s'
    cursor = conn.cursor()
    artesano = cursor.execute(sqlArtesano, (comuna, descripcion, nombre, email, celular))
    sql = "INSERT INTO foto (ruta_archivo, nombre_archivo, artesano_id) VALUES (%s,%s,%s)"
    cursor.execute(sql, (ruta, foto, artesano))
    conn.commit()
