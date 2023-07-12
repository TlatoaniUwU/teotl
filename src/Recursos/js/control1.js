function mostrarZombie(){
    var z = document.getElementById("zombie");
    var t = document.getElementById("teotl-warrior");
    if (z.style.display.length === 0 || z.style.display === 'none') {
        z.style.display = "block";
        t.style.display = "none";
    }
}
function mostrarTeotl(){
    var z = document.getElementById("zombie");
    var t = document.getElementById("teotl-warrior");
    if (t.style.display.length === 0 || t.style.display === 'none') {
        t.style.display = "block";
        z.style.display = "none";
    }
}

window.onload(push());
//Notificacion

function push(){
    Push.Permission.request();
    Push.create('Hola Mundo',{
    body: 'Soy tu notificación',
    icon: "TEOTL.png",
    timeout: 1500000,
    vibrate: [100, 100, 100],
    onClick: function (){
        window.location = "https://google.mx";
        alert("xd");
    }});

}