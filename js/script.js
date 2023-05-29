console.log('JS OK');

//chiedi numero di km da percorrere
const userDistance = (prompt('inserisci la distanza che vuoi percorrere in km', '100'));
console.log('distanza dichiarata ' + userDistance + 'km');

//chiedi età
const userAge = (prompt('inserisci la tua età', '20'));
console.log('età dichiarata ' + userAge);

//validazione (controllo che i valori inseriti siano solo numeri maggiori di 0)
if(isNaN(userDistance) || isNaN(userAge) || userDistance < 1 || userAge < 1){
    alert ('i valori devono essere numeri maggiori di 0')
    console.log('valori non validi')
    document.getElementById('tiket-price').innerText = ('ERRORE! ricaricare la pagina e inserire numeri maggiori di 0')
} else{

    //calcola prezzo biglietto basandosi sui km scelti dell'utente tenendo in considerazione il costo di 0.21€ al km
    const basePrice = userDistance * 0.21;
    console.log('prezzo del biglietto base ' + basePrice);

    let reducedPrice;

    //applicazione sconti
    if (userAge < 18) {
        reducedPrice = (basePrice * 20) / 100;
        console.log('costo biglietto applicando sconto del 20% ' + (basePrice - reducedPrice) + '€');
    } else if (userAge > 65) {
        reducedPrice = (basePrice * 40) / 100;
        console.log('costo biglietto applicando sconto del 40% ' + (basePrice - reducedPrice) + '€');
    } else {
        reducedPrice = 0;
        console.log('costo biglietto senza sconto ' + (basePrice - reducedPrice) + '€');
    }
    //prezzo finale del biglietto
    document.getElementById('tiket-price').innerText = (basePrice - reducedPrice).toFixed(2) + '€';
}