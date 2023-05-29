Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

# Steps
- chiedi numero chilometri da percorrere
- chiedi età
- controlla SE i valori NON sono validi
    - Errore!
- ALTRIMENTI
    - calcola prezzo del biglietto basandosi sui chilometri scelti *(0.21€ al km)*
    - applica uno sconto
        - 20% se l'età è minore di 18
        - 40% se l'età è superiore ai 65
    - genera un prezzo finale *(con massimo due decimali)* 


