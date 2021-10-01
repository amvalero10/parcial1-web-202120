# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint
Al cargar la pagina para buscar la altura de los jugadores de NBA, la carga genera la tabla y los inputs en blanco.

Al ingresar un numero de altura de jugador, el submit actva una funcion en el codigo de script.js, aqui se captura el input con el valor numerico referente a la suma de las alturas.

Luego se llama a una funcion llamada callApi() la cual recibe como parametro el valor del input. Esta funcion realiza un fecth a la pagina para descargar los datos de los jugadores, recibe los datos en json y luego envia estos datos a otra funcion llamada pintarTabla, la cual recibe como argumento los datos de los jugadores y el numero del input de las alturas.

pintarTabla selecciona el id en el dom del objeto 'table', primero lo limpia y luego realiza un dos forEach para comparar las alturas de los jugadores. Si la suma de las alturas coicide, se agrega en la tabla las filas correspodientes a los nombres de los jugadores. La funcion de CreateElemente permite crear una nueva fila con los parametros ingresados y la funcion append agrega esta fila a la tabla.

Finalmente las funciones por medio de la estructura del DOM pintan la tabla con los jugadores cuyas sumas son iguales al input recibido.