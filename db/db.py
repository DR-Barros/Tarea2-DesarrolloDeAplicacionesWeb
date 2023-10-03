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
    sql = "SELECT nombre FROM tipo_artesania"
    cursor = conn.cursor()
    cursor.execute(sql)
    tipos = cursor.fetchall()
    artesanias = []
    for t in tipos:
        artesanias += [t[0]]
    return artesanias

#devuelve un array con (id, región)
def getRegion(conn):
    sql = "SELECT * FROM region"
    cursor = conn.cursor()
    cursor.execute(sql)
    region = cursor.fetchall()
    return region

#devuelve un array con (nombre, región_id, comuna_id)
def getComuna(conn):
    sql = "SELECT * FROM comuna"
    cursor = conn.cursor()
    cursor.execute(sql)
    comuna = cursor.fetchall()
    return comuna

def addArtesano(conn, comuna, descripcion, nombre, email, celular):
    sql = "INSERT INTO artesano (comuna_id, descripcion_artesania, nombre, email, celular) VALUES (%s,%s,%s,%s,%s)"
    cursor = conn.cursor()
    cursor.execute(sql, (comuna, descripcion, nombre, email, celular))
    conn.commit()

def addArtesanoTipo(conn, tipo, comuna, descripcion, nombre, email, celular):
    sqlTipos = 'SELECT * FROM arteano_tipo'
    cursor = conn.cursor()
    tipos = cursor.execute(sqlTipos)
    tipo_id = -1
    for t in tipos:
        if t[1] == tipo:
            tipo_id = t[0]
    sqlArtesano = 'SELECT id FROM artesano WHERE comuna_id=? AND descripcion_artesania=?  AND nombre=? AND email=?  AND celular=?'
    cursor = conn.cursor()
    artesano = cursor.execute(sqlArtesano, (comuna, descripcion, nombre, email, celular))
    sql = "INSERT INTO artesano_tipo (artesano_id, tipo_artesania_id) VALUES (?,?)"
    cursor.execute(sql, (artesano, tipo_id))
    conn.commit()

def addArtesanoFoto(conn, foto, comuna, descripcion, nombre, email, celular):
    pass