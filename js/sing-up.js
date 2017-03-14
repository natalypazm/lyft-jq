function init(){
	var next =$('#nextDatos'); //document.getElementById("nextDatos")
	next.click(onClickNext);//next.addEventListener('click',onClickNext);
    var flagTwo=$('#flagTwo');//document.getElementById("flagTwo");
    var codePais=$('#codePais');//document.getElementById("codePais");
    var srcLocal=localStorage.getItem('src');
    var codeLocal=localStorage.getItem('code');
    flagTwo.src=srcLocal;
    codePais.textContent=codeLocal;
}
function onClickNext(){
	var tel=$('#number').val();//document.getElementById("number").value;
    //console.log(tel);
	localStorage.setItem('number',tel);
    var regex = /^([0-9])*$/;
    
   if(tel==""||(!regex.test(tel))|| tel.length>9) {
        alert("Campo inválido");
            return false; 
          }
    nextpage();
    
    var aleatorio; 
    aleatorio = Math.round(Math.random() * (100 - 999) + 999);
    alert('su codigo es : LAB-'+aleatorio);    
}


function nextpage() {
    
    location.href='sing-up-datos.html';
}

