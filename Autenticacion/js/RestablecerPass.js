window.onload = inicializar;
var formRestablecer;

function inicializar(){
    formRestablecer = document.getElementById("form-restablecer");
    formRestablecer.addEventListener("submit", enviarRestablecimiento, false);
}

function enviarRestablecimiento(){
    event.preventDefault();
    var auth = firebase.auth();
    var emailAddress = event.target.email.value;
    
    auth.sendPasswordResetEmail(emailAddress)
    .then(function() {
        $("#sendemail").modal();
    })
    .catch(function(error) {
        document.getElementById("msgerror").innerHTML=error
        $("#nohayemail").modal();
    });
}

function volverinicio(){
    window.location = "index.html"
}