var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    var erroAjax = document.querySelector("#erro-ajax");
    erroAjax.classList.add("invisivel");

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes111");
    
    xhr.addEventListener("load", function(){
        if(xhr == 200){
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
                
            });
            
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("invisivel");
        }
            
    });
    xhr.send();
})