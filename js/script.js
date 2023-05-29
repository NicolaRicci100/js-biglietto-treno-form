console.log('JS OK');

const userName = document.getElementById('name');
const finalName = document.querySelector('.displayed-name');
const button = document.getElementById('submit-button');
const userDistance = document.getElementById('distance');
const userAge = document.getElementById('age');


button.addEventListener('click', function(){

    //chiedi il nome e il cognome
    finalName.innerText = userName.value;
    console.log(userName.value);

    //chiedi numero di km da percorrere
    
    console.log('distanza dichiarata ' + userDistance.value + 'km');

    //chiedi età
    
    console.log('età dichiarata ' + userAge.value);

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
})