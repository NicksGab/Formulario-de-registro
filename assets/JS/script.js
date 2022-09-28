const btnReset = document.querySelector("#reset");
const form = document.querySelector("#form");
const span = document.querySelector("#span");
const resposta = document.querySelector("#resposta");
const telaRegistro = document.querySelector('#body');
const mudarTela = document.querySelector('#irParaRegistrados');
const main = document.querySelector('#cadastro');
const voltar = document.querySelector('#voltarCadastro');
const registros = document.querySelector('#registros');
const cadastros = []; 

function formulario(e) {
  e.preventDefault();
  
  const nome = form.querySelector("#nome");
  const sobrenome = form.querySelector("#sobrenome");
  const email = form.querySelector("#email");
  const tel = form.querySelector("#fone");
  const senha = form.querySelector("#senha");
  const senhaConfirmada = form.querySelector("#confirmarSenha");
  
  if (!nome.value === true) {
    span.innerHTML = `Nome inválido!`;
    resposta.style.backgroundColor = "red";
    return;
  } else if (!sobrenome.value === true) {
    span.innerHTML = `Sobrenome inválido!`;
    resposta.style.backgroundColor = "red";
    return;
  } else if (!email.value === true) {
    span.innerHTML = `Email inválido!`;
    resposta.style.backgroundColor = "red";
    return;
  } else if (!tel.value === true) {
    span.innerHTML = `Telefone inválido!`;
    resposta.style.backgroundColor = "red";
    return;
  } else {
    return verificarSenha();
  }
  
  function verificarSenha() {
    if (senha.value !== false && senhaConfirmada.value === senha.value) {
      cadastros.push = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        tel: tel.value,
        senha: senha.value,
      };
      span.innerHTML = `Usuário cadastrado com sucesso! :)`;
      resposta.style.backgroundColor = "green";
      totalRegistros++
      return adcionarCadastro();
    } else {
      span.innerHTML = `Senhas não coincidem.`;
      resposta.style.backgroundColor = "red";
      senhaConfirmada.value = "";
    }
  }
}
form.addEventListener("submit", formulario);



btnReset.addEventListener("click", () => {
  span.innerHTML = ``;
  resposta.style.backgroundColor = "transparent";
});



function mudarAteRegistro() {
  if (main.classList.contains('hide') === false){
    main.classList.add('hide');
    telaRegistro.classList.remove('hide');
  } else {
    main.classList.remove('hide');
    telaRegistro.classList.add('hide');
  }
}
mudarTela.addEventListener('click', mudarAteRegistro);
voltar.addEventListener('click', mudarAteRegistro);


 
function adcionarCadastro () {
  registros.innerHTML += `<div><p><strong>Nome:</strong> ${cadastros.push.nome} ${cadastros.push.sobrenome} <br><br> <h2>Contatos:</h2> <strong>Email:</strong><br> ${cadastros.push.email}<br> <strong>Telefone:</strong><br> ${cadastros.push.tel}<br><br> <h3>Senha:</h3><strong>Senha:</strong> ${cadastros.push.senha}</p></div>`;
}