const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');



enterButton.addEventListener('click', (event) => {

  var numeroP = input.value

  callApi(numeroP)

  //getresults(123);
  event.preventDefault();
});



/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  //console.log(data);
  //printValues(data);
}



function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}





function callApi(pNumero) {
  fetch(
    `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
  )
    .then((resp) => resp.json())
    .then((data) => {
      //console.log('data', data);
      //console.log(data.values);
     //return data.values
     pintarTabla(data.values,pNumero)
     // getresults(data.values)

    });
}




 function pintarTabla(datos,pNumero){
  console.log(datos);





  pNumero = parseInt(pNumero)

  const tablaCont = document.getElementById('table');
  var indice = 1

  tablaCont.innerHTML = "";
  tablaCont.innerHTML = ` <tr>
  <th scope="col">#</th>
  <th scope="col">First Player</th>
  <th scope="col">Second Player</th>
</tr>`;
 

  //extraer y ordernar

  datos.forEach(a => {
  datos.forEach(b => {
   var aAlt = parseInt(a.h_in)
   var bAlt = parseInt(b.h_in)
   var suma = parseInt(aAlt + bAlt)

    //console.log("a",aAlt)
    //console.log("b",bAlt)
    if(suma === pNumero){
     //console.log("suma de los numeros",suma)
     //console.log("valor p",pNumero) 
     const linea = document.createElement('tr');
     linea.innerHTML = `        
      <td >${indice}</td>
      <td >${a.first_name} ${a.last_name}</td>  
      <td >${b.first_name} ${b.last_name}</td> 
                               `;
     tablaCont.append(linea)
     indice = indice +1
    }  
  }); 
});

}





