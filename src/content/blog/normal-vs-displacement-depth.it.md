Nella produzione 3D contemporanea, modellare manualmente ogni rugosità, trama tessile o fessura minerale nella geometria poligonale è impraticabile per limiti di calcolo. Gli artisti 3D ricorrono alle texture per simulare o generare profondità. Comprendere le differenze architetturali tra mappe Bump, Normal e Displacement è fondamentale per ottimizzare i tempi di calcolo senza rinunciare al massimo impatto visivo.

## Mappe Bump: la prima simulazione in scala di grigi

La tecnica più longeva è rappresentata dalla mappa **Bump**. Si tratta di un'immagine in scala di grigi a 8 o 16 bit in cui il grigio al 50% rappresenta il piano neutro, il bianco l'elevazione e il nero le incisioni.

- **Come funziona:** Il motore di render analizza la variazione di tonalità tra pixel adiacenti e modifica l'orientamento delle normali di shading al momento del calcolo.
- **I limiti:** Simula solo variazioni di altezza perpendicolari alla superficie. Non può riprodurre inclinazioni complesse o sottosquadri orientati nello spazio.

Oggi le mappe bump sono relegate alla micro-trama secondaria, come la grana sottile della carta o la leggera porosità del cuoio.

## Mappe Normal: vettori di superficie su coordinate RGB

Lo standard industriale consolidato per motori real-time e produzioni commerciali è la **Tangent Space Normal Map**. Anziché un valore scalare di altezza, le mappe normal archiviano veri vettori tridimensionali codificati nei canali colore RGB:

- **Canale Rosso:** Inclinazione orizzontale della superficie (Asse X).
- **Canale Verde:** Inclinazione verticale della superficie (Asse Y).
- **Canale Blu:** Vettore perpendicolare uscente dalla superficie (Asse Z, responsabile della caratteristica colorazione violacea/indaco).

Fornendo vettori di orientamento completi, la luce interagisce, scorre e riflette sulla superficie in modo naturale da qualsiasi direzione. Tuttavia, la mappa normal rimane un'illusione ottica: **non modifica la silhouette geometrica del modello**. Guardando l'oggetto con un angolo radente, il bordo esterno risulterà perfettamente liscio.

## Mappe Displacement: vera tassellazione geometrica

Quando un'inquadratura ravvicinata richiede autentica profondità fisica — come la zigrinatura di una ghiera metallica, la maglia spessa di un capo outdoor o rocce alpine scolpite — il **Displacement** diventa insostituibile.

A differenza di bump e normal, il displacement sposta fisicamente i vertici della geometria lungo le loro normali durante il rendering, impiegando una suddivisione adattiva (micro-polygon tessellation).

1. **La silhouette si modifica:** Il profilo esterno del modello rivela veri picchi, avvallamenti e rilievi tridimensionali.
2. **Ombre reali:** La geometria tassellata proietta ombre autentiche sulle superfici adiacenti e riceve auto-occlusione fisica.
3. **Impegno computazionale:** Il displacement richiede molta più memoria RAM e allunga sensibilmente i tempi di calcolo.

Una pipeline CGI equilibrata combina questi strumenti con metodo: il displacement governa le forme principali che ridefiniscono la silhouette, mentre le mappe normal e roughness rifiniscono i micro-dettagli tattili ad alta frequenza.
