let str = "<tr><td>Nombre</td><td>Teléfono</td><td>Comuna</td><td>Tipo Artesanías</td><td>Foto</td></tr>"
const LISTADOARTESANOS = document.getElementById("tabla");
fetch("./datos/artesanos.json")
.then(response => response.json())
.then(data => {
    data.artesanos.forEach(e => {
        str += "<tr><td><a href='./informacion-artesano.html?Nombre="+e.Nombre+"'>"+e.Nombre+"</a></td>"
        str += "<td>"+e.Celular+"</td>";
        str += "<td>"+e.Comuna+"</td><td>";
        e.Tipo.forEach(t => {str += t+"<br>"});
        str+= "</td><td>";
        e.Fotos.forEach(f => {
            let i = f.indexOf(".");
            str+= "<img src='./resources/img/"+f+"' alt='"+f.substring(0, i)+"' heigth ='120px' width ='120px'>";
        })
        str += "</td><tr>"
    })
    LISTADOARTESANOS.innerHTML = str
})
