jQuery(document).ready(function() {

    $("#buscar").click(function(event) {
        $("#resultado").empty();
        $("#urldescarga").empty();
    });
    
    $("#buscar").click(function() {
        $.get("https://dog.ceo/api/breeds/image/random",
            function(data, status) {
                console.log(data);
                console.log("la url es: "+data.message);

                var resultado = "";
                var linkD = "";

                resultado = 
                '<img src="'+data.message+'" class="card-img-top" style="height: auto; width: auto;" alt="...">';
                $("#resultado").append(resultado);

                linkD =
                '<a href="'+data.message+'">Descargala aqui</a>'
                $("#urldescarga").append(linkD);
                
                //document.getElementById("urldescarga").innerHTML=data.message;
                
            }
        );
    });
});