jQuery(document).ready(function() {

    $("#buscar").click(function(event) {
        $("#resultado").empty();  
    });
    
    $("#buscar").click(function() {
        $.get("https://dog.ceo/api/breeds/image/random",
            function(data, status) {
                console.log(data);
                console.log("la url es: "+data.message);

                var resultado = "";

                resultado = 
                '<img src="'+data.message+'" class="card-img-top" style="height: auto;" alt="...">';
                $("#resultado").append(resultado);
                
                document.getElementById("urldescarga").innerHTML=data.message;
            }
        );
    });
});

function descargar(){
    window.location.href = document.getElementById("urldescarga").value;
}