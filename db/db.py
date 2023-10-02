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


def getTipoArtesania(conn):
    sql = "SELECT nombre FROM tipo_artesania"
    cursor = conn.cursor()
    cursor.execute(sql)
    tipos = cursor.fetchall()
    return tipos
