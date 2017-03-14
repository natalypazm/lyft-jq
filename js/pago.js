function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getObjectLocalStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}
function init()
{
	var url=getObjectLocalStorage('url');
	var chofer= getObjectLocalStorage('chofer');
	var precioFinal= getObjectLocalStorage('maximo');
	var precio= '$ '+precioFinal;
	$('#foto').css("background-image", "url("+url+")");
	$('#chofer').html(chofer);
	$('#precioFinal').html(precio);
}