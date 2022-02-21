function mostrar() {
    var x = document.getElementById("psswd");
    var y = document.getElementById("pSenha")
    if (x.type === "password") {
        x.type = "text";
        y.innerHTML = "Esconder senha";
    } else {
        x.type = "password";
        y.innerHTML = "Mostrar senha";
    }
}