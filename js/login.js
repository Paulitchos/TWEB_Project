function validate() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" && password == "") {
        alert("Por favor, introduza as suas credenciais de acesso");
    }
    else if (username == "admin" && password == "admin") {
        window.open("USF.html");
    }
    else {
        alert("Credenciais incorretas");
    }
}

function skip() {
    window.open("USF.html");
}