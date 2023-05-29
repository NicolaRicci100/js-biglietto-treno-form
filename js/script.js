console.log('JS OK');

//chiedi nome e cognome
const inputName = document.getElementById('name');
const ticketName = document.querySelector('.ticket-name');

//chiedi numero di km da percorrere
const inputDistance = document.getElementById('distance');

//chiedi età
const inputAge = document.getElementById('age');


const button = document.getElementById('submit-button');
button.addEventListener('click', function(){
    const userName = inputName.value;
    console.log('il nome e il cognome sono ' + userName);
    ticketName.innerText = userName;
    console.log('il nome e il cognome sono apparsi nel biglietto');



// //validazione (controllo che i valori inseriti siano solo numeri maggiori di 0)

// if(isNaN(inputDistance) || isNaN(inputAge) || inputDistance < 1 || inputAge < 1){
//     alert ('i valori devono essere numeri maggiori di 0')
//     console.log('valori non validi')
//     document.getElementById('tiket-price').innerText = ('ERRORE! ricaricare la pagina e inserire numeri maggiori di 0')
// } else{

//     //calcola prezzo biglietto basandosi sui km scelti dell'utente tenendo in considerazione il costo di 0.21€ al km
//     const basePrice = inputDistance * 0.21;
//     console.log('prezzo del biglietto base ' + basePrice);

//     let reducedPrice;

//     //applicazione sconti
//     if (inputAge < 18) {
//         reducedPrice = (basePrice * 20) / 100;
//         console.log('costo biglietto applicando sconto del 20% ' + (basePrice - reducedPrice) + '€');
//     } else if (inputAge > 65) {
//         reducedPrice = (basePrice * 40) / 100;
//         console.log('costo biglietto applicando sconto del 40% ' + (basePrice - reducedPrice) + '€');
//     } else {
//         reducedPrice = 0;
//         console.log('costo biglietto senza sconto ' + (basePrice - reducedPrice) + '€');
//     }
//     //prezzo finale del biglietto
//     document.getElementById('tiket-price').innerText = (basePrice - reducedPrice).toFixed(2) + '€';
// }
});