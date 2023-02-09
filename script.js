async function buscaCep(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaConvertida = await consultaCep.json();
        if (consultaConvertida.erro) {
            throw Error ('Cep não existe')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaConvertida.localidade;
        logradouro.value = consultaConvertida.logradouro;
        estado.value = consultaConvertida.uf;
        bairro.value = consultaConvertida.bairro;
    }catch(erro){
        mensagemErro.innerHTML= `<p>Cep inválido</p>`
    }

    console.log(consultaConvertida);
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaCep(cep.value))