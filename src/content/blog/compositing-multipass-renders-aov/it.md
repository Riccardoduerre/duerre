Calcolare un'immagine 3D finale come un unico file "Beauty" appiattito può andare bene per un test rapido, ma nelle produzioni commerciali di vertice azzera la flessibilità in fase di consegna. Se il cliente o il direttore creativo richiede riflessi leggermente più discreti o ombre più calde, ricalcolare una scena complessa può richiedere ore. Il rendering multipass con AOV (Arbitrary Output Variables) garantisce controllo assoluto sul risultato finale.

## Scomporre l'equazione di rendering

L'immagine finale completa non è altro che la somma matematica di componenti fisiche distinte:

> **Beauty = Diffusione Diretta + Diffusione Indiretta + Riflessione Diretta + Riflessione Indiretta + Emissione + Trasparenza**

Calcolando queste componenti come livelli separati in file OpenEXR a 32 bit:
- **Diffuse Direct:** La luce che colpisce direttamente la superficie dalle sorgenti.
- **Diffuse Indirect:** I rimbalzi secondari di luce tra gli oggetti (illuminazione globale).
- **Specular Direct/Indirect:** I riflessi nitidi e opachi delle sorgenti e dell'ambiente circostante.
- **Transmission:** La luce che attraversa elementi traslucidi, cristalli e liquidi.

Nei software di compositing (come Fusion o Nuke), ricostruire l'immagine tramite somme lineari permette di intensificare i riflessi, riscaldare l'occlusione ambientale o calibrare l'esposizione di singole sorgenti in tempo reale, senza dover riaprire la scena 3D.

## La rivoluzione di Cryptomatte

In passato, isolare singoli oggetti o materiali nel compositing richiedeva macchinose maschere colore (clown pass) che soffrivano di bordi scalettati e problemi di anti-aliasing.

**Cryptomatte** ha risolto definitivamente questa criticità generando automaticamente maschere procedurali con:
- Anti-aliasing perfetto a livello di sub-pixel.
- Pieno supporto a trasparenze, motion blur e profondità di campo.
- Tracciamento automatico dei nomi degli asset e dei materiali direttamente dalla scena 3D.

Con un singolo clic nel software di compositing è possibile selezionare qualsiasi dettaglio — la ghiera di un orologio, una cucitura o una carrozzeria — e isolarlo con una maschera alfa impeccabile per il grading selettivo.

## I pass di dati geometrici: Z-Depth e Normals

Accanto ai canali ottici, il rendering multipass fornisce preziose informazioni geometriche:
1. **Z-Depth Pass:** Registra la distanza esatta di ogni punto dalla lente, permettendo di inserire nebbie volumetriche o regolare la profondità di campo in post-produzione.
2. **World Normal Pass:** Mappa l'orientamento spaziale delle superfici, consentendo strumenti di relighting per aggiungere luci virtuali direttamente sul fotogramma bidimensionale già calcolato.
