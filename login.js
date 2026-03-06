const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");

const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");


// REGISTRAR
btnRegistro.onclick = () => {

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if(!nombre.value || !email.value || !password.value){
alert("Complete todos los campos");
return;
}

usuarios.push({
nombre:nombre.value,
email:email.value,
password:password.value
});

localStorage.setItem("usuarios", JSON.stringify(usuarios));

alert("Usuario registrado");
};


// LOGIN
btnLogin.onclick = () => {

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let usuarioEncontrado = usuarios.find(u =>
u.email === email.value &&
u.password === password.value
);

if(usuarioEncontrado){

localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));

window.location="dashboard.html";

}else{
alert("Usuario o contraseña incorrectos");
}

};
