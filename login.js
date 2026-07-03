function login() {
    alert("bem vindo");

    const usuario = document.getElementById("usuario").value;

    document.getElementById("msg").innerHTML =
        "Obrigado por entrar, " + usuario + "!";
}
