var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(event);
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        
        exibeMensagemDeErro(erros);
        return;
    }
    adicionaPacienteNaTabela(paciente)
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    form.reset();
});

function adicionaPacienteNaTabela(paciente){

    
    var pacienteTr = montaTr(paciente);
    
   
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
}

function exibeMensagemDeErro(erros){
    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.classList.add("mensagem-erro");
        ul.appendChild(li);
        
    })
     
}



function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    
    return paciente;
}


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}


function montaTd(conteudo, classe){
    var td = document.createElement("td");
    td.textContent = conteudo;
    td.classList.add(classe);
    return td;
}


function validaPaciente(paciente){
    var erros = [];
    if(paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco");
    if(paciente.gordura.length == 0)
        erros.push("A gordura não pode ser em branco")
    if(validaAltura(paciente.altura) == false)
        erros.push("Altura é inválido"); 
    if(validaPeso(paciente.peso) == false)
        erros.push("Peso é inválido");
    
    return erros;
    
}