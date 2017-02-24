var titulo = document.querySelector(".titulo");
titulo.textContent = "Igor Lima";


var pacientes = document.querySelectorAll(".paciente");


for(var i =0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);
    
    if(!pesoEhValido){
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("dados-paciente-invalido");
    }
    if(!alturaEhValida){
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("dados-paciente-invalido");
    }
    if(pesoEhValido && alturaEhValida){  
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso(peso){
    if(peso > 10 && peso < 250)
        return true;
    return false;
}
function validaAltura(altura){
    if(altura > 0.3 && altura < 2.50)
        return true;
    return false;
}

function calculaImc(peso, altura){
    
    var imc = (peso/(altura * altura));
    return imc.toFixed(2);
}

