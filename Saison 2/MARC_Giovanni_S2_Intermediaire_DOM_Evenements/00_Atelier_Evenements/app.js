// A1 — Toggle
const btnToggle = document.getElementById('btnToggle');
const texteToggle = document.getElementById('texteToggle');
btnToggle.addEventListener('click', function(){
texteToggle.classList.toggle('hidden');
});

// A2 — Compteur
let valeur = 0;
const spanCount = document.getElementById('count');
document.getElementById('plus').addEventListener('click', function(){
valeur++;
spanCount.textContent = valeur;
});
document.getElementById('moins').addEventListener('click', function(){
valeur--;
spanCount.textContent = valeur;
});
document.getElementById('reset').addEventListener('click', function(){
valeur = 0;
spanCount.textContent = valeur;
});

// A3 — input
const txt = document.getElementById('txt');
const len = document.getElementById('len');const msgA3 = document.getElementById('msgA3');
txt.addEventListener('input', function(){
const n = txt.value.length;
len.textContent = n;
if(n < 5){
msgA3.textContent = 'Erreur : minimum 5 caractères.';
msgA3.className = 'msg error';
} else {
msgA3.textContent = 'OK';
msgA3.className = 'msg ok';
}
});

// A4 — submit
const formA4 = document.getElementById('formA4');
const msgA4 = document.getElementById('msgA4');
formA4.addEventListener('submit', function(e){
e.preventDefault();
const nom = document.getElementById('nom').value.trim();
const email = document.getElementById('email').value.trim();if(nom.length < 3){
msgA4.textContent = 'Erreur : nom trop court.';
msgA4.className = 'msg error';
return;
}
if(!email.includes('@')){
msgA4.textContent = 'Erreur : email invalide.';
msgA4.className = 'msg error';
return;
}
msgA4.textContent = 'Données valides';
msgA4.className = 'msg ok';
});