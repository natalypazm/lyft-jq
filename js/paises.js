function init(){
var jsonPaises = '[{"nombre": "Argentina","phone_code": 54,"imageURL": '+
    '"image/ar.png"},{"nombre": "Australia","phone_code": 61,"imageURL":'+'"image/au.png"},{"nombre": "Bolivia","phone_code": 591,"imageURL":'+'"image/bo.png"},{"nombre": "Brasil","phone_code": 55,"imageURL":'+'"image/br.png"},{"nombre": "Canadá","phone_code": 1,"imageURL":'+'"image/ca.png"},{"nombre": "China","phone_code": 86,"imageURL":'+'"image/cn.png"},{"nombre": "Colombia","phone_code": 57,"imageURL":'+'"image/co.png"},{"nombre": "Costa Rica","phone_code": 506,"imageURL":'+'"image/cr.png"},{"nombre": "Ecuador","phone_code": 593,"imageURL":'+'"image/ec.png"},{"nombre": "España","phone_code": 34,"imageURL":'+'"image/es.png"},{"nombre": "Francia","phone_code": 33,"imageURL":'+'"image/fr.png"},{"nombre": "Perú","phone_code": 51,"imageURL":'+'"image/pe.png"},{"nombre": "Venezuela","phone_code": 58,"imageURL":'+'"image/ve.png"},{"nombre": "Suiza","phone_code": 41,"imageURL":'+'"image/ch.png"}]';
var paises = JSON.parse(jsonPaises);
var leng = paises.length; 
//console.log(paises[0].nombre);

var lista=$('#lista-paises');//document.getElementById("lista-paises");
//lista.each(function(){
for (var i=0; i < leng; i++){
  var html='<a id="country" href="sing-up.html" ><li class="list-group-item" >'+'<img class="flag" src="'+ paises[i].imageURL+'" style="height:20px; width: 30px;" alt=""><p class="country" style="margin-left:5px;">'+paises[i].nombre+'</p><span class="codigo" style="display:none;">+'+paises[i].phone_code+'</span>'+'</li></a>'; 
    lista.append(html); 

  //var pais=localStorage.getItem('pais',paises[i].nombre);
}
var lis=$('li');//document.getElementsByTagName('li');
lis.each(function(){
    $(this).click(onLinkClick);
});
  //for(var i= 0; i<lis.length; i++){
  //lis[i].addEventListener('click',onLinkClick);
}
//button.on("click",onButtonClick);
function onLinkClick(evt){
var srclocal=evt.currentTarget.getElementsByClassName('flag')[0].src;//$('.flag').attr("src");
console.log(srclocal);
var codelocal=evt.currentTarget.getElementsByClassName('codigo')[0].textContent;//$('.codigo').textContent;
localStorage.setItem('src', srclocal);
localStorage.setItem('code', codelocal);
}
