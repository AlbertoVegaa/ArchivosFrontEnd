window.onload = inicializar;
var formRegister;

function inicializar(){
    formRegister = document.getElementById("form-registro");
    formRegister.addEventListener("submit", comparacionpass, false);
}

function comparacionpass(){
    event.preventDefault();
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("rtpassword").value;
    if(pass1 == pass2){
        registrar();
    }
    else{
        $("#DiferentesPass").modal();
    }
}

function registrar(){
    var email = event.target.email.value;
    var contrasena = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function(result){
        CorreoValidacion();
        $("#CuentaCreada").modal();
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}

function CorreoValidacion(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
    }).catch(function(error) {
    });
}

function volverainicio(){
    window.location.href = "index.html";
}