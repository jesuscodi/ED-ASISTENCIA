import { db } from "./firebase.js";

import {
collection,
addDoc,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");

const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");


const usuariosRef = collection(db,"usuarios");


// REGISTRAR
btnRegistro.onclick = async () => {

if(!nombre.value || !email.value || !password.value){
alert("Complete todos los campos");
return;
}

try{

await addDoc(usuariosRef,{
nombre:nombre.value,
email:email.value,
password:password.value
});

alert("Usuario registrado");

}catch(e){
alert(e.message);
}

};


// LOGIN
btnLogin.onclick = async () => {

const q = query(
usuariosRef,
where("email","==",email.value),
where("password","==",password.value)
);

const snap = await getDocs(q);

if(snap.empty){
alert("Usuario o contraseña incorrectos");
return;
}

localStorage.setItem("usuario", email.value);

window.location="dashboard.html";

};
