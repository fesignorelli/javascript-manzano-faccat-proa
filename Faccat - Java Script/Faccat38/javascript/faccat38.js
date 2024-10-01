codigoUsuario = parseInt(prompt("Digite o código de usuário: "));

if (codigoUsuario === 1234) {
    senha = parseInt(prompt("Digite a senha: "));

    if (senha === 9999) {
        alert("Acesso permitido");
    } else {
        alert("Senha incorreta");
    }
} else {
    alert("Usuário inválido!");
}
