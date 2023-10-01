const COMUNAS = {
    "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
    "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
    "Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"],
    "Región del Libertador Gral. Bernardo O’Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
    "Región del Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
    "Región de Ñuble": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
    "Región del Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
    "Región de la Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "Región de Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
    "Región de Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "Región Aisén del Gral. Carlos Ibáñez del Campo": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
    "Región de Magallanes y de la Antártica Chilena": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"],
    "Región Metropolitana de Santiago": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
}

let boton = document.getElementById("Registrar-Artesano");
boton.addEventListener("click", (event)=>agregarArtesano(event));
let comuna = document.getElementById("comuna")
let region =document.getElementById("region");
region.addEventListener("change",(event)=>{
    comuna.disabled = false;
    let listaComunas = COMUNAS[region.value]
    let str = ""
    for(elem in listaComunas){
        str+="<option value='"+listaComunas[elem]+"'>"+listaComunas[elem]+"</option>";
    }
    comuna.innerHTML = str
})

const ARTESANIAS = document.getElementsByName("artesania")
let cantArtesanias = 0;
ARTESANIAS.forEach(e =>{
    e.addEventListener("change", function() {
        if(this.checked){
            cantArtesanias += 1;
            if(cantArtesanias>=3){
                ARTESANIAS.forEach(e=>{if(!e.checked) e.disabled=true})
            }
        } else{
            cantArtesanias -= 1;
            if(cantArtesanias < 3){
                ARTESANIAS.forEach(e=>{e.disabled = false})
            }
        }
    })
})


const FOTO1 = document.getElementById("photo");
const FOTO2 = document.getElementById("foto2");
let photo2;
const FOTO3 = document.getElementById("foto3");
let photo3;
FOTO1.addEventListener("change",(e) => changeFoto1(e));
const FOTOS = []
function changeFoto1(e){
    if (FOTO1.value == ""){
        FOTO2.innerHTML ="";
        photo2 ="";
        FOTO3.innerHTML ="";
        photo3 ="";
    } else {
        FOTO2.innerHTML = "<input name='photo2' id='photo2' type='file' accept='image/png, image/jpeg'></input>"
        photo2 = document.getElementById("photo2")
        photo2.addEventListener("change",(e) => changeFoto2(e));
    }
    
}

function changeFoto2(e){
    if (FOTO2.value == ""){
        FOTO3.innerHTML ="";
        photo3 ="";
    } else {
        FOTO3.innerHTML = "<input name='photo3' id='photo3' type='file' accept='image/png, image/jpeg'></input>"
        photo3 = document.getElementById("photo3")
    }
}


function agregarArtesano(event){
    event.preventDefault()
    let valido = true

    let regionSpan = document.getElementById("region-span")
    let comunaSpan = document.getElementById("comuna-span")
    //Chequea que se introduzca la region y la comuna
    if(region.value == ""){
        regionSpan.innerText = "Seleccione su región";
        valido = false
    } else if(comuna.value == ""){
        comunaSpan.innerText = "Seleccione su comuna";
        valido = false
    } else {
        regionSpan.innerText = "";
        comunaSpan.innerText = "";
    }

    //chequear el tipo artesania
    let cantArt = 0
    let artesaniaSpan = document.getElementById("artesania-span");
    ARTESANIAS.forEach(e=>{if(e.checked) cantArt+=1})
    if(cantArt == 0){
        artesaniaSpan.innerText ="Seleccione al menos una artesania";
        valido = false;
    } else if (cantArt > 3){
        artesaniaSpan.innerText ="Seleccione maximo 3 artesanias";
        valido = false;
    } else{
        artesaniaSpan.innerText = "";
    }


    //Fotos artesania
    let fotosSpan = document.getElementById("fotos-span");
    if (FOTO1.value == ""){
        fotosSpan.innerText = "Agregue al menos una foto"
        valido = false;
    } else {
        fotosSpan.innerText = "";
    }
    


    //Nombre
    const NAME = document.getElementById("name");
    let nameSpan = document.getElementById("name-span");
    if(NAME.value.length<3 || NAME.value.length> 80){
        nameSpan.innerText ="Ingrese un nombre de entre 3 y 80 caracteres";
        valido = false
    } else{
        nameSpan.innerText = "";
    }

    //Mail
    const EMAIL = document.getElementById("mail")
    let mailSpan = document.getElementById("mail-span")
    const EXP =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!EXP.exec(EMAIL.value)){
        mailSpan.innerText ="Debe ser con el formato de correo";
        valido = false
    } else {
        mailSpan.innerText ="";
    }

    //celular
    const PHONE = document.getElementById("phone");
    const EXPREGPHONE = /^[+]?(56)?9\d{8}$/;
    let phoneSpan = document.getElementById("phone-span");
    if (EXPREGPHONE.exec(PHONE.value) || PHONE.value == ""){
        phoneSpan.innerText = ""
    } else {
        phoneSpan.innerText = "Ingrese un numero chileno ej: +56912345678 o 912345678"
        valido = false
    }
    if(valido){
        const MSG = document.getElementById("msg")
        const FORM = document.getElementById("formulario")
        FORM.style.display = "none"
        let str = "<p>¿Confirma el registro de este artesano?<p>"
        str += "<button id='SI'>Sí, confirmo</button>"
        str += "<button id='NO'>No, quiero volver al formulario</button>"
        MSG.innerHTML = str
        const SI = document.getElementById("SI")
        const NO = document.getElementById("NO")
        // si quiere agregar se avisa que tuvo exito y se grega link a inicio
        //sino vuelve al inventario
        SI.addEventListener("click", e => {
            str ="<p>Hemos recibido el registro de Artesano. Muchas gracias.</p>"
            str += "<a href='.'>Volver a Inicio </a>"
            MSG.innerHTML = str
        })
        NO.addEventListener("click", e => {
            FORM.style.display = "block"
            MSG.innerHTML = ""
        })
    }
}