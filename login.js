import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nombreInput = document.getElementById("nombre");

const btnLogin = document.getElementById("btnLogin");
const btnRegistro = document.getElementById("btnRegistro");

const usuariosCollection = collection(db, "usuarios");


// REGISTRO
btnRegistro.onclick = async () => {

const email = emailInput.value.trim();
const password = passwordInput.value.trim();
const nombre = nombreInput.value.trim();

if(!email || !password || !nombre){
alert("Complete todos los campos");
return;
}

try{

const userCredential =
await createUserWithEmailAndPassword(auth,email,password);

await addDoc(usuariosCollection,{
uid:userCredential.user.uid,
nombre,
email,
creado:new Date()
});

alert("Usuario registrado");

}catch(error){
alert(error.message);
}

};


// LOGIN
btnLogin.onclick = async () => {

const email = emailInput.value.trim();
const password = passwordInput.value.trim();

if(!email || !password){
alert("Complete todos los campos");
return;
}

try{

await signInWithEmailAndPassword(auth,email,password);

window.location="dashboard.html";

}catch{
alert("Usuario o contraseña incorrectos");
}

};
