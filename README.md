# Gioco dei dadi e Finta Login
## Nome repo: js-mail-dadi
### Oggi due esercizi al prezzo di uno, perchè "a Natale a Natale  si può fare di piùùùùù" 
- **Potete svolgere entrambi gli esercizi in un unico file HTML e JS, se la cosa vi confonde, separateli, purchè siano sulla stessa repo.**
---
 ### `ESERCIZIO 1` 
    - Gioco dei dadi
        1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
        3. Stampiamo in pagina i due tiri e il risultato
---
### `ESERCIZIO 2` 
    - Finta Login
        1. Inventa una lista di email autorizzate
        2. Chiedi all’utente la sua email, con un piccolo form.
        3. Controlla che la mail inserita sia nella lista di chi può accedere,
        4. Stampa un messaggio appropriato sull’esito del controllo.
---

- Prima di partire a scrivere codice poniamoci qualche domanda:
    - Che ci sia un array da qualche parte?
    - Cosa devo controllare esattamente?
- `NOTE:`
    - è vietato utilizzare il metodo includes()
    - La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
    - Non è necessario usare il tag 'form', ma se lo usate, ricordate di impostare il type="button" sul 'button' altrimenti il form ricaricherà la pagina.
    - L'esito del controllo deve essere stampato in pagina
-----------------------------------------------------------------
**Consigli del giorno:**
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!

## Scaletta `Esercizio 1`
- Recuperare gli elementi HTML
- Generare due variabili numeriche in cui andranno inseriti i due valori del lancio del dado. Uno per l'utente e uno per il pc.
- Generare i due numeri casuali da 1 a 6.
- Controllare i due risultati e decretare il vincitore sulla base: **il numero più alto vince**
- Stampiamo in pagina i due numeri usciti e il vincitore
