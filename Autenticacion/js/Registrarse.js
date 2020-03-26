window.onload = inicializar;
var formRegister;

function inicializar(){
    formRegister = document.getElementById("form-registro");
    formRegister.addEventListener("submit", comparacionpass, false);
}

function comparacionpass(){
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("rtpassword").value;
    if(pass1 == pass2){
        registrar();
    }
    else{
        alert("Contrasenas diferentes "+pass1+" "+pass2);
    }
    
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