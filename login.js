function login() {
    alert("Funcionou!");

    const usuario = document.getElementById("usuario").value;

    document.getElementById("msg").innerHTML =
        "Obrigado por entrar, " + usuario + "!";
}
