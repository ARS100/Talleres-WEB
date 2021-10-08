window.onload=function leerapi(){  //cargar la funcion leerapi cuando el documento cargue
   
    fetch('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json')
     .then(response => response.json()) //se envia una petcion a la url
     .then(json => api(json)) //se obtiene respuesta
     .catch(error=>console.log(error))    //manejar algun error que vote 
 
     const api=(json)=>{
         for(i=0;i<=json.length;i++){ //recorro los departamentos
             Jzon=json; //variable global
             departemento=json[i].departamento; //obtiene el departamento en cada iterracion
              id=json[i].id; //obtiene el id del departamento en cada iterracion
             
             document.getElementById('departamentos').innerHTML+= `<option value="${id}">${departemento}</option>`// dibujar los option en el html
            
         } 
     }
  
         var select = document.getElementById('departamentos'); 
         select.addEventListener('change',function(){ // cada vez que se selecione un nuevo departamento aparenzcan las ciudades de dicho departamento
          v = this.options[select.selectedIndex]; // se optiene el id del departamento que se selecione
          ciudad=Jzon[v.value].ciudades;  //se muestra las cidades del departamento selecionado
          for(i=0;i<ciudad.length;i++){
             ciu=ciudad[i];//se obtiene ciudad por ciudad
             
             document.getElementById('ciudaddes').innerHTML+= `<option >${ciu}</option>` //pintar ciudades en el html
            
         }
          
     });
     
 
 
 
     
 }
 