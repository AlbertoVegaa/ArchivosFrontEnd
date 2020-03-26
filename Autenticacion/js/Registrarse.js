window.onload = inicializar;
var formRegister;

function inicializar(){
    formRegister = document.getElementById("form-registro");
    formRegister.addEventListener("submit", registrar, false);
}

function registrar(){
    event.preventDefault();
    var email = event.target.email.value;
    var contrasena = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .then(function(result){
        CorreoValidacion();
        window.location.href = "index.html";
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
}

function CorreoValidacion(){
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
    }).catch(function(error) {
    });
}