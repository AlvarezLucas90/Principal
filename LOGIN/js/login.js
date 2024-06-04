// perfil de ejemplo
const admin = {
    correo: "admin@admin.com",
    password: "1234",
};

const user = {
    correo: "user@user.com",
    password: "1234",
}
// FUNCION
const logIn = (event) => {
    event.preventDefault();
    //   console.log("funcion login");
    let correo = document.querySelector("#exampleInputEmail1").value;
    let password = document.querySelector("#exampleInputPassword1").value;
    // console.log(correo,password);
    // validar usuario
    if (correo === admin.correo && password === admin.password) {

        localStorage.setItem("user", JSON.stringify(correo));
        // redigir
        location.replace("./admin.html");
    } else if (correo === user.correo && password === user.password) {
        localStorage.setItem("user", JSON.stringify(correo));
        location.replace("../index.html");

    } else {
        alert("El correo o el password son incorrectos!");
    }
};

// Función para actualizar el botón de inicio de sesión
const updateLoginButton = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const botonLogin = document.getElementById("botonlogin");

    if (user && botonLogin) {
        botonLogin.innerText = user;
    }
};

// Llamar a la función para actualizar el botón al cargar la página
document.addEventListener("DOMContentLoaded", updateLoginButton);


// escuchador de evento
document.getElementById("formLogin").addEventListener("submit", logIn);
