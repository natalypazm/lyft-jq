var miMapa;
var latLongLabo={
    lat: -16.457389199999998,
    lng: -71.5315308
}
var opcionesMapa = {
    enableHighAccuracy: true
}

function initMap() {
    miMapa = new google.maps.Map(document.getElementById('map'),{
        center: {
            lat: latLongLabo.lat,
            lng: latLongLabo.lng},
            zoom: 18
        });
};

function centrarMapa(position){
    miMapa.setZoom(18);
    miMapa.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: miMapa,
        title:"Mi posición actual"
    });
};

function mostrarErrores(){

}

function init(){
    if(navigator.geolocation){
        console.log('soportado');
        navigator.geolocation.watchPosition(centrarMapa);
    }
    else
    {
        console.log('no soportado');
    }
    $.ajax().success().error();
    $.ajax({url:'https://clientes.geekadvice.pe/api/carrera',data:{tipo:"8",destino:"Paz Peru"}
    }).success(function(_data){
        console.log(_data.tipo);
        //alert("OK")
    }).fail(function(){
        alert('error');
    });
    
};


