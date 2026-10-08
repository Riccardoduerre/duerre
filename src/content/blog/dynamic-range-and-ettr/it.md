---
title: "Massimizzare la gamma dinamica: la strategia ETTR sul campo"
date: 2026-08-24
image: ../../assets/images/optimized/Giau_00001.webp
excerpt: "Spingere l’esposizione del sensore a destra per preservare il segnale nelle ombre senza sacrificare la transizione graduale delle alte luci."
---
I sensori delle fotocamere digitali non registrano la luce nel modo in cui la percepisce l'occhio umano. Mentre il nostro sistema visivo risponde in maniera logaritmica, i sensori digitali quantificano i fotoni in modo rigorosamente lineare. Comprendere questo principio è la chiave per padroneggiare la gamma dinamica tramite la tecnica ETTR (Expose To The Right).

## La linearità dei sensori digitali

In un file RAW a 14 bit, capace di distinguere 16.384 livelli tonali per canale, la distribuzione delle informazioni lungo gli stop di gamma dinamica è fortemente sbilanciata verso le alte luci:

- **Lo stop più luminoso (Alte luci):** Raccoglie la metà esatta dei dati disponibili (8.192 livelli).
- **Il secondo stop:** Ne raccoglie un quarto (4.096 livelli).
- **Lo stop più scuro (Ombre profonde):** Comprime le informazioni in poche decine di livelli discreti.

Sottoesponendo uno scatto in camera per poi recuperare la luminosità in fase di sviluppo, si amplifica un segnale estremamente povero insieme al rumore termico ed elettronico di fondo del sensore. Il risultato inevitabile è comparsa di rumore cromatico, perdita di contrasto locale e posterizzazione dei toni scuri.

## Come eseguire l'ETTR senza bruciare le luci

L'ETTR consiste nel massimizzare l'esposizione verso destra nell'istogramma, fermandosi appena prima che uno qualsiasi dei canali RGB perda informazioni irrecuperabili.

1. **Consultare l'istogramma RGB, non quello di luminanza:** L'istogramma di luminanza convenzionale fa una media ponderata dei tre canali. In paesaggi con cieli saturi o elementi floreali, un singolo canale (spesso il blu o il rosso) può risultare bruciato anche se la curva globale sembra contenuta.
2. **Considerare il margine rispetto all'anteprima JPEG:** L'istogramma visualizzato sullo schermo della fotocamera riflette il rendering JPEG a 8 bit generato dal processore interno. I file RAW reali contengono spesso da mezzo a un intero stop di recupero oltre la soglia in cui lampeggiano gli avvisi di sovraesposizione.
3. **Ricalibrare l'esposizione in post-produzione:** Una volta aperto il file RAW nel software di sviluppo, si abbassa l'esposizione per impostare il mood desiderato. Il rumore rimane confinato al livello minimo, i dettagli nelle ombre rimangono ricchi e le sfumature tonali sul viso o nel cielo risultano estremamente morbide.

## Quando evitare la tecnica ETTR

L'ETTR è una tecnica mirata per contesti controllati, fotografia di paesaggio o ritrattistica dove è possibile gestire con calma tempi e sensibilità ISO.

Se per portare l'istogramma a destra è necessario alzare eccessivamente gli ISO o allungare i tempi di scatto rischiando il micromosso, il vantaggio sul rapporto segnale/rumore si annulla. La vera competenza consiste nel riconoscere quando la tecnica ottimizza il risultato e quando invece la velocità d'azione deve guidare lo scatto.
