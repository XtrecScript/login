function entrar() {
    var user,pass;
    user = document.getElementById("txt_user").value;
    pass = document.getElementById("txt_pass").value;
    if (user=="Elkin") {
        if (pass == 123) {
            document.getElementById("lbl_resp").innerHTML = "Bienvenido"
        } else {
            document.getElementById("lbl_resp").innerHTML = "Contraseña incorrecta"
        }
    
    } else {
        document.getElementById("lbl_resp").innerHTML = "Usuario no encontrado "
    }
}