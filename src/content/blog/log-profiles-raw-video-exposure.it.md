Registrare con profili gamma logaritmici (come Sony S-Log3, Canon C-Log2 o ARRI LogC) è la prassi standard nelle produzioni commerciali per preservare l'intera estensione dinamica del sensore. Tuttavia, valutare a occhio un'immagine Log piatta e desaturata su un monitor da campo espone al rischio concreto di una cronica sottoesposizione.

## La matematica dietro le curve Log

Il video convenzionale per trasmissione televisiva (Rec.709) applica una curva ad alto contrasto pensata per la visione diretta sui display commerciali. Al contrario, le curve Log comprimono un'ampia gamma dinamica attraverso una funzione matematica che riserva un maggior numero di valori numerici alle sfumature delle alte luci e al degradare delle ombre.

Poiché il contrasto percepito a schermo è ridotto, un'inquadratura che a prima vista appare bilanciata è spesso sottoesposta di uno o due stop. Riportando l'immagine al contrasto nominale in fase di color grading, le ombre schiarite rivelano un rumore fastidioso e incarnati disomogenei.

## Il vantaggio dei False Color rispetto a Zebra e Waveform

Se l'oscilloscopio a forma d'onda (waveform) è prezioso per valutare l'equilibrio generale dell'inquadratura, i **False Color** costituiscono lo strumento più rigoroso per garantire coerenza espositiva su set complessi.

I False Color mappano specifiche fasce di luminosità IRE in colori a tinta unita facilmente identificabili:

- **Viola (da 0 a 4 IRE):** Neri chiusi e assenza di segnale.
- **Blu (da 20 a 30 IRE):** Dettagli nelle ombre profonde.
- **Verde (da 38 a 42 IRE):** Grigio medio al 18%, punto di riferimento per le principali curve Log.
- **Rosa / Grigio chiaro (da 50 a 60 IRE):** Incarnato naturale per tonalità caucasiche e mediterranee.
- **Giallo / Arancio (da 70 a 80 IRE):** Alte luci con dettaglio conservato.
- **Rosso (da 98 a 100 IRE):** Clipping del sensore e perdita irreparabile di dati.

Attivando sul monitor la scala False Color calibrata per la curva Log in uso, si elimina ogni incertezza legata alla luce solare riflessa sullo schermo. Posiziona un cartoncino grigio 18% sul set, regola diaframma o filtri ND fino a vederlo tingersi di verde e verifica che i volti si collochino nella fascia corretta.

## Video RAW: guadagno del sensore ed esposizione via metadati

Nei flussi di lavoro in formato RAW a 12 o 16 bit (come ProRes RAW o REDCODE), il sensore archivia i valori nativi senza applicare una curva di colore irreversibile. In questo scenario:

- Il valore ISO agisce frequentemente come metadato modificabile in post-produzione piuttosto che come guadagno analogico fissato sul file.
- Selezionare correttamente il valore base del sensore (Dual Native ISO) determina la ripartizione degli stop sopra e sotto il grigio medio.
- Una corretta esposizione sul set garantisce la massima flessibilità cromatica durante la finalizzazione in DaVinci Resolve.
