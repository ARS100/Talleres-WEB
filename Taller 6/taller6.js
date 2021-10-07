function mostrar(){

    document.getElementById('oculto').style.display='block';
 
  }

function ocultar(){
    document.getElementById('oculto').style.display='none';
  }
  
function calcularEdad(Fechadenacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(Fechadenacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

function ver(Fechadenacimiento)
{
    var v = calcularEdad(Fechadenacimiento);
    document.getElementById('ocultoxd').innerHTML = v;
}

            
function validarPassword() {
        var pass1 = document.getElementById('Contraseña').value;
        var pass2 = document.getElementById('Ccpassword').value;
      

            if (pass1 != pass2) {

                alert('Contraseñas diferentes')
            } else {
                setTimeout(function() {
                    location.reload();
                }, 3000);
        }
}