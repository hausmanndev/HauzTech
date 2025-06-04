// var botaoEnviar = document.querySelector("#enviar");

// botaoEnviar.addEventListener("click", function(event){
//     event.preventDefault();

//     //Captura o formulário
//     var form = document.querySelector("#frmContato");

//     // if(form.email.value == '' && form.telefone.value == '') {
//     //     return alert('Por favor, preencha um e-mail e/ou um telefone para que possa retornar o seu contato');
//     // } else {
//     //     //Monte o texto de retorno
//     // }

//     msgRetorno = form.nomeCompleto.value + ", agradecemos o seu contato! <br><br>Vamos avaliar suas considerações e retornaremos"

//     document.getElementById('formRetorno').style.display = "block";

//     document.getElementById('textoRetorno').innerHTML = msgRetorno;

//     document.getElementById('formulario').style.display = "none";
//     return;
// }); 

// var botaoEnviar = document.querySelector("#enviar");

// botaoEnviar.addEventListener("click", function(event){
//     event.preventDefault();

//     //Captura o valor do nome diretamente pelo ID
//     var nomeCompleto = document.querySelector("#nomeCompleto").value;

//     var msgRetorno = nomeCompleto + ", agradecemos o seu contato!<br><br>Vamos avaliar suas considerações e retornaremos em breve.";

//     // Mostra a div de retorno
//     document.getElementById('formRetorno').style.display = "block";
//     document.getElementById('textoRetorno').innerHTML = msgRetorno;

//     // Esconde o formulário
//     document.getElementById('formulario').style.display = "none";
// });

var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    // Captura os valores dos campos
    var nomeCompleto = document.querySelector("#nomeCompleto").value.trim();
    var email = document.querySelector('input[type="email"]').value.trim();
    var telefone = document.querySelector('input[type="tel"]').value.trim();
    var dataNascimento = document.querySelector('input[type="date"]').value.trim();
    var genero = document.querySelector('input[name="genero"]:checked');
    var motivoContato = document.querySelector('select[title="MotivoContato"]').value;
    var assunto = document.querySelector('select[title="Assunto"]').value;
    var enderecoRua = document.querySelector('input[placeholder="Rua"]').value.trim();
    var enderecoBairro = document.querySelector('input[placeholder="Bairro"]').value.trim();
    var enderecoNumero = document.querySelector('input[placeholder="Número"]').value.trim();
    var cep = document.querySelector('input[placeholder="CEP"]').value.trim();
    var descricao = document.querySelector('textarea').value.trim();

    // Verifica se algum campo está vazio ou não selecionado
    if (
        nomeCompleto === '' ||
        email === '' ||
        telefone === '' ||
        dataNascimento === '' ||
        !genero ||
        motivoContato === 'Escolha uma opção' ||
        assunto === 'Escolha uma opção' ||
        enderecoRua === '' ||
        enderecoBairro === '' ||
        enderecoNumero === '' ||
        cep === '' ||
        descricao === ''
    ) {
        alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
        return;
    }

    // Todos os campos preenchidos: exibe mensagem e oculta formulário
    var msgRetorno = nomeCompleto + ", agradecemos o seu contato!<br><br>Vamos avaliar suas considerações e retornaremos em breve.";

    document.getElementById('formRetorno').style.display = "block";
    document.getElementById('textoRetorno').innerHTML = msgRetorno;

    document.getElementById('formulario').style.display = "none";
});

