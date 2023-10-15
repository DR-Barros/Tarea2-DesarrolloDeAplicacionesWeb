# Tarea2-DesarrolloDeAplicacionesWeb

Se agrega un menu en la parte superior de la pagina web para que se pueda ir navegando de forma fluida por la pagina web. 
Ademas de este menu, se agregan los links cuando el enunciado de la tarea lo requiere.


## Pagina de inicio:
En la pagina de inicio se pone la imagen de los panamericanos. Despues de esto se hacen secciones que puedan servir para redireccionar a las secciones de registro y de visualizacion de los artesanos e hinchas.


## Registro de hinchas
Para la seleccion de los deportes de interes se considero que un select option puede llegar a ser dificil de manejar cuando se quieren seleccionar diferentes deportes. Es por esto que se implementa un fieldset con multiples checkbox. para asegurarnos que solo se puedan seleccionar maximo 3 deportes se usa JS que al llegar a 3 deportes inhabilita el resto. Es importante recalcar que esta inhabilitacion es independiente de la posterior validación.

## Registro de artesanos
Al igual que en la seleccion de deportes para hinchas se implementa un fieldset con multiples checkbox para elegir el tipo de artesanias. Se implementa para esta tarea el submit de los datos al servidor, realizando una validación al lado del servidor


## Ver hinchas
En ver hinchas para hacer un simil a la llamada a una base de datos de hinchas se hace un JSON con la información de estos y luego mediante JS se extrae la lista de hinchas y se renderiza en la tabla. al pinchar sobre el nombre de uno de estos se va a la informacion detallada de este.

### Información hincha
Se pasa por parametros de link el nombre del hincha que se va a buscar al JSON y se muestra la información de este.

## Ver artesanos
hace una consulta a la base de datos para mostrar la informacion de los 5 ultimos artesanos, permite ir hacia la pagina siguiente y anterior para visualizar de 5 en 5 los artesanos. Es importante recalcar que solo muestra los botones siguiente y anterior si es que corresponde. 

## Información artesano
resive el id del artesano y con este hace las consultas para mostrar la información que corresponde. si se intenta hacer una consulta maliciosa (no existe el id o no es un entero), redirige la pagina a ver artesanos.