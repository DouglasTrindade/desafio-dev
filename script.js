function validateEmail(email) {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var nomes = ["rodrigo", "rosiery", "bruno"];
function validar() {
var nome = document.getElementById("nome");
var sobrenome = document.getElementById("sobrenome");
var data = document.getElementById("data");
var nomeusuario = document.getElementById("nomeusuario");
var email = document.getElementById("email");
var senha = document.getElementById("senha").checked;
			
if (nome.value == "") {
	alert("Nome não informado");
	nome.focus();
	return;
}
				
if (sobrenome.value == "") {
	alert("Sobrenome não informado");
	sobrenome.focus();
	return;
}

if (data.value == "") {
	alert("Data não informada");
	data.focus();
	return;
}

if (nomeusuario.value == "") {
	alert("Usuário não informado");	
	nomeusuario.focus();
	return;
}

if (["rodrigo", "rosiery", "bruno"].indexOf(nomeusuario.value.trim().toLowerCase()) != -1) {
	alert("Usuário já cadastrado.");
	return;
}

if (email.value == "" || !validateEmail(email.value)) {
	alert("E-mail não informado");
	email.focus();
	return;
}

if (document.getElementById("senha").value.length <6) {
	alert("Senha precisa no minímo 6 caracteres");
	return;
} 

alert("Você foi cadastrado com sucesso!");
formulario.submit();
}