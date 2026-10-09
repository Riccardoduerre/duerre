---
title: "Physically Based Rendering: padroneggiare la pipeline Roughness-Metallic"
pubDate: 2026-09-07
coverImage: ../../../assets/blog/Giau_00004.webp
description: "Demistificare la microfacet theory, la riflettanza dielettrica di Fresnel e perché le mappe di roughness sono la vera anima del realismo 3D."
tags: []
---
Nella moderna direzione visiva 3D, il fotorealismo non si ottiene con shader arbitrari o regolazioni a occhio. Il Physically Based Rendering (PBR) fonda la resa visiva su modelli fisici e matematici che riproducono fedelmente l'interazione tra fotoni e materia.

## Microfacet Theory e geometria superficiale

A livello macroscopico, uno specchio e un pezzo di gesso appaiono totalmente diversi. A scala microscopica, tuttavia, entrambe le superfici sono composte da una miriade di microfaccette piane.

Nei moderni modelli PBR (come la distribuzione GGX):
- Su una superficie lucida, le microfaccette sono allineate nella stessa direzione, riflettendo la luce in un raggio speculare concentrato.
- Su una superficie opaca, le microfaccette presentano orientamenti casuali, disperdendo la luce in molteplici direzioni.

La mappa di **Roughness** governa la dispersione statistica di queste microfaccette su una scala da 0.0 a 1.0. Il bianco assoluto (1.0) produce una dispersione completamente opaca, mentre il nero assoluto (0.0) genera un riflesso speculare perfetto. È nelle sfumature intermedie che risiede la veridicità tattile: impronte, polvere sottile, micro-graffi e leggere ossidazioni.

## La natura binaria del canale Metallic

Uno degli errori più diffusi nella texturizzazione 3D è considerare il parametro **Metallic** come un regolatore di lucentezza. In fisica, la materia si divide in due grandi famiglie:

1. **Dielettrici (Non-metalli):** Plastica, legno, pelle, roccia, vetro. Il loro colore diffuso deriva dall'assorbimento e dalla rifrazione interna della luce (Base Color). I riflessi speculari sono sempre bianchi e la riflettanza perpendicolare (F0) è compresa tra il 2% e il 5% (convenzionalmente 0.04).
2. **Conduttori (Metalli):** Oro, argento, ferro, rame, alluminio. I metalli non hanno dispersione diffusa interna: l'interazione avviene sulla superficie. I loro riflessi speculari assumono il colore della mappa Base Color e la loro riflettanza F0 raggiunge valori compresi tra il 70% e il 95%.

In una pipeline PBR corretta, il canale Metallic deve essere trattato in modo quasi esclusivamente binario: 0.0 per i dielettrici, 1.0 per i metalli puri. I valori intermedi in scala di grigi devono apparire solo nei pixel di transizione tra superfici o dove sono presenti sporcizia e ossidazioni.

## Conservazione dell'energia e riflessione di Fresnel

Un principio fondamentale del PBR è la conservazione dell'energia: una superficie non può emettere o riflettere più luce di quanta ne riceve. All'aumentare della rugosità superficiale, il riflesso speculare si allarga e perde intensità al centro per preservare l'equilibrio complessivo.

Inoltre, ogni materiale reale manifesta l'**effetto Fresnel**: osservando una superficie con un angolo radente, la riflettanza speculare tende al 100%. Nella creazione di asset tridimensionali d'eccellenza, questo fenomeno deve emergere naturalmente dalle proprietà ottiche del materiale, senza forzature artificiali in post-produzione.
