function initDatos()
{
  var next =$('#next')//document.getElementById("next");
  next.click(onClickNext);//next.addEventListener('click',onClickNext);
}


function onClickNext()
{
  var name=$('#name');//document.getElementById("name").value;
  var email=$('#email').val();//document.getElementById("email").value;
  localStorage.setItem('name',name);
  localStorage.setItem('email',email);
  soloLetras(name);
  validarEmail(email);
  nextpage();
}


  function soloLetras(name){
      if (name.match(/^[a-zA-Z]+$/)){
        return true;
      }
      else{
        alert("llena correctamente tu nombre y apellido");
      }
  }
function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
    {
        alert("llena correctamente el email");
    }
    return true;
}
function nextpage() {
    
    location.href='mapa.html';
}
/*
function validar(){
  if(soloLetras()==true && validarEmail()==true){
      nextpage();
  }
}
*/
