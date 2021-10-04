
  const miCampoTexto = document.getElementById("Nombre").value;
  const miApellido = document.getElementById("Apellidos").value;
  const pass1 = document.getElementById("Ccpassword").value;
  const pass2 = document.getElementById("Ccpassword2").value;
  const CCusuario = document.getElementById("CC").value;
  const MiCadena = document.getElementById("Direccion").value;
  const contador = 0;
  const cadena = MiCadena.slice(0,3);
  const cadena2 = MiCadena.slice(0,2);
  const cadena3 = MiCadena.slice(0,5);
  const tEmail = document.getElementById("email").value;

function validar1() {
    var miNombre = document.getElementById("Nombre").value;
    if(miNombre.length == 0){
        alert('Ingrese nombre')
    }

    if(miNombre.length >= 25){
        alert('La longitud maxima es 25')
        
    }

    var apellidoo = document.getElementById("Apellidos").value;
    if(apellidoo.length == 0) {
        alert('Ingrese apellidos')
    }

    if(apellidoo.length >= 25){
        alert('La longitud maxima es 25')
        
    }
    var MiCadena = document.getElementById("Direccion").value;
    var cadenaI = MiCadena.slice(0,3);
    var cadena2I = MiCadena.slice(0,2);
    var cadena3I = MiCadena.slice(0,5);

    var contadoor = 0;

    if(cadenaI==='cll'){
        contadoor = contadoor+1;
    }
    if(cadenaI==='cra'){
        contadoor = contadoor+1;
    }
    if(cadena2I==='av'){
        contadoor = contadoor+1;
    }
    if(cadenaI==='anv'){
        contadoor = contadoor+1;
    }
    if(cadena3I==='trans'){
        contadoor = contadoor+1;
    }
    if(contadoor==0)
    {
        alert('No hay direccion valida')
    }
    if(contadoor==1){
        contadoor=2;
    }
    
    var CCus = document.getElementById("CC").value;

    if(CCus.length == 0)
    {
        alert('Inserte la CCusuario')
    }
    
    if(CCus.length < 10 && CCus.length!=0)
    {
        alert('El cc usuario debe contener entre 10-20 caracteres')
    }
    if(CCus.length > 20)
    {
        alert('El cc usuario debe contener entre 10-20 caracteres')
    }
    
    var pass1 = document.getElementById("Ccpassword").value;
    if(pass1.length < 15){
        alert('Contraseña muy corta')  
    }
    if(pass1.length > 20){
        alert('Contraseña muy larga')  
    }
    
    var pass2 = document.getElementById('Ccpassword2').value;
     
   
        if (pass1 != pass2) {
            
            alert('Contraseñas diferentes')
        } else {
            setTimeout(function() {
                location.reload();
            }, 3000); 
    }
    var tEmail = document.getElementById("email").value;
    if(tEmail.length>125){
        alert('El email supero su limite de caracteres')
    }
}

