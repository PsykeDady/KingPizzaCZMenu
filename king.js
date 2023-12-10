"use strict";

var check = "<span style=\"color:green\";>&check;</span> ";

var adds = "<span style=\"color:green; margin-left:var(--padding-el-xl);margin-right:var(--padding-el-xl);\";>&plus;</span> ";

var removes = "<span style=\"color:red; margin-left:var(--padding-el-xl);margin-right:var(--padding-el-xl);\";>&minus;</span>";

var trashs="<span style=\"color:lightgray; margin-left:var(--padding-el-xl);margin-right:var(--padding-el-xl);\";>&#128465;</span>"

var moltiplicatore="<span>&times;</span>";

var pizze = [
    "Margherita",
    "Napoli",
    "Silana",
    "Bufalina",
    "4 Stagioni",
    "4 Formaggi",
    "Parmigiana",
    "Emilia",
    "Caprese",
    "Tropeana",
    "Viennese",
    "Nordica",
    "Queen",
    "Ortolana",
    "Elena",
    "Italia",
    "Catanzaro",
    "Duca",
    "Calabrese",
    "Principe",
    "Natasha",
    "Patate & Wurstel",
    "Rotolo",
    "King Pizza",
    "Kate",
    "Gex",
    "Calzone al forno"
];
var prezzi_p = [
    "4,00",
    "5,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00",
    "6,00"
]
var descrizioni_p = [
    ["Pomodoro", "Mozzarella", "Origano"],
    ["Pomodoro", "Mozzarella", "Acciughe", "Origano"],
    ["Pomodoro", "Mozzarella", "Salsiccia", "Funghi porcini"],
    ["Pomodoro", "Mozzarela di bufala", "Basilico"],
    ["Pomodoro", "Mozzarella", "Funghi", "Prosciutto cotto", "Carciofi", "Olive"],
    ["Mozzarella", "Gorgonzola", "Emmental", "Scaglie di grana"],
    ["Pomodoro", "Mozzarella", "Melanzane", "Scaglie di grana"],
    ["Pomodoro", "Mozzarella", "Scaglie di grana"],
    ["Pomodoro fresco", "Mozzarella fresca", "Origano", "Basilico"],
    ["Pomodoro", "Mozzarella", "Tonno", "Cipolla"],
    ["Pomodoro", "Mozzarella", "Prosciutto cotto", "Wurstel"],
    ["Pomodoro", "Mozzarella", "Tonno", "Wurstel"],
    ["Mozzarella", "Crema di zucca", "pancetta", "Provola aff."],
    ["Mozzarella", "Peperoni", "Melanzane", "Zucchine"],
    ["Mozzarella", "Patate lesse", "Funghi porcini", "Gorgonzola"],
    ["Pomodoro fresco", "Mozzarella", "Rucola", "Prosciutto crudo", "Grana"],
    ["Pomodoro", "Mozzarella", "Salsiccia", "Peperoni"],
    ["Mozzarella", "Zucchine", "Prosciutto crudo", "N'duja"],
    ["Pomodoro", "Mozzarella", "Salame", "olive"],
    ["Mozzarella", "Prosciutto cotto", "Wurstel", "Tonno", "Scaglie di grana"],
    ["Pomodoro", "Mozzarella", "Patatine fritte"],
    ["Pomodoro", "Mozzarella", "Patatine fritte", "Wurstel"],
    ["Mozzarella", "Panna ai 4 formaggi", "Salame"],
    ["Mozzarella", "Prosciutto cotto", "Provola affumicata", "Funghi porcini", "Origano"],
    ["Mozzarella", "Zucchine", "Pancetta", "Funghi porcini"],
    ["Pomodoro", "Mozzarella", "Salame piccante", "N'duja", "Pancetta"],
    ["Pomodoro", "Mozzarella", "Prosciutto cotto"],
];
var rosticceria = [
    "Arancino Siciliano",
    "Arancino Rosso",
    "Arancino Bianco",
    "Arancino Porcino",
    "Arancino Speck",
    "Arancino N'duja",
    "Arancino al Gorgonzola",
    "Patatine fritte",
    "Pat. fritte & Wurstel",
    "Hot Dog",
    "Crocché di patate",
    "Polpetta di carne",
    "Calzone fritto"
];
var prezzi_r = [
    "1,00",
    "1,00",
    "1,00",
    "1,00",
    "1,00",
    "1,00",
    "1,00",
    "2,00",
    "3,00",
    "1,50",
    "1,00",
    "1,00",
    "2,00"
];
var descrizioni_r = [
    ["Riso al pomodoro", "Carne macinata", "Piselli"],
    ["Riso al pomodoro", "Mozzarella", "Prosciutto cotto"],
    ["Riso bianco", "Mozzarella"],
    ["Riso bianco", "Mozzarella", "Funghi porcini"],
    ["Riso bianco", "Mozzarella", "Speck"],
    ["Riso bianco", "N'duja"],
    ["Riso bianco", "Gorgonzola"],
    ["Patatine stick fritte"],
    ["Patatine stick fritte", "wurstel"],
    ["pane", "wurstel"],
    ["Crocchetta con purea di patate"],
    ["Polpetta con carne"],
    ["Calzone fritto"]

];
var informazioni =
    "Questo è il menu pizze digitale di <b>King of Pizza</b> di <i>Salvatore Crisafulli</i> (Catanzaro Sala)<br>" +
    "numero di telefono: <a href=\"tel:+39 3200754460\">3200754460</a><br><br>" +
    "<u><b>Non puoi ordinare direttamente dal sito</b></u>, ma puoi fare una lista per ricordarti di quello che vuoi prendere, in anteprima avrai anche il prezzo<br>" +
    "<u>Il sito potrebbe non essere sempre aggiornato</u>, quindi chiamare per avere conferma dei propri ordini!<br>"
    ;
var homepage =
    "<p>Benvenuto sul men&ugrave; online di King Pizza.</p>" +
    "<h3>Come funziona</h3>" +
    "<p>Sono presenti due menu: uno per le <span class=\"colleg\" onclick=\"dettagli(0,-1)\">pizze</span> e uno per la <span class=\"colleg\" onclick=\"dettagli(1,-1)\">rosticceria</span></p>" +
    "<p>Non potrai ordinare online, ma cliccando su ogni prodotto sar&agrave; indicata una <u>descrizione</u> e cliccando l' <u>icona</u> " + adds + " lo aggiungerai al <span class=\"colleg\" onclick=\"riepilogo()\">riepilogo</span>, verrà quindi generata una lista da consultare o modificare, allegata al <b>totale</b> e al <b>numero di telefono</b> per chiamare.</p>" +
    "<p><b>ATTENZIONE:</b> La manutenzione dei dati non avviene a cura della pizzeria, non tutti i prodotti potrebbero essere <u>disponibili</u> e non tutti i prezzi <u>aggiornati</u>.</p>" +
    ""
    ;


const t_pizza=0;
const t_rosticceria=1;

var carrello = new Array(2);
carrello[0]=new Array(pizze.length);
carrello[1]=new Array(rosticceria.length);
var totale = 0;
var nEl=0;
var ultima_pagina=0;
const p_homepage=0;
const p_pizze=1;
const p_rosticceria=2;
const p_riepilogo=3;
const p_info=4;

function locStorage(){
    if (typeof(Storage) !== "undefined") {
        var dato=localStorage.getItem("carrello");
        if (dato) {
            dato=dato.split(',');
            var i=0;
            for(i=0;i<pizze.length;i++){
                dato[i]=parseInt(dato[i]);
                nEl=(dato[i]>0)?nEl+1:nEl;
                carrello[0][i]=dato[i];
                
            }
            for(var j=0;j<rosticceria.length;j++){
                dato[i+j]=parseInt(dato[i+j]);
                nEl=(dato[i+j]>0)?nEl+dato[i+j]:nEl;
                carrello[1][j]=dato[i+j];
                
            }
        }

        dato=localStorage.getItem("ultima_pagina");
        if (dato) ultima_pagina=parseInt(dato);
    }
    
    switch(ultima_pagina){
        case p_homepage: ricarica(false); return;
        case p_pizze: dettagli(t_pizza,-1);return;
        case p_rosticceria: dettagli(t_rosticceria,-1);return;
        case p_riepilogo: riepilogo();return;
        case p_info: info();return;
    }
}

function saveLocal(){
    localStorage.clear();
    var dato="";
    if (typeof(Storage) !== "undefined") {
        for(var i=0;i<carrello.length;i++){
            for(var j=0;j<carrello[i].length;j++) {
                var tmp=carrello[i][j];
                dato+=
                ((tmp)?tmp:0)+',';
            }
        }
        dato=dato.substring(0,dato.length-1);
        localStorage.setItem("carrello",dato);
        localStorage.setItem("ultima_pagina",parseInt(ultima_pagina));
    }
    
}

function svuotaCache(){
    carrello = new Array(2);
    carrello[0]=new Array(pizze.length);
    carrello[1]=new Array(rosticceria.length);
    nEl=0;
}

function ricarica(flag_clear) {
    ultima_pagina=p_homepage;
    var centro = document.getElementById("centro");
    centro.innerHTML = `<div class="centrotext"><p>${homepage}</p></div>`;
    if(flag_clear){
        svuotaCache()
    }
    saveLocal();
}

function dettagli(tipo, numero) {
    ultima_pagina=(tipo==t_pizza)?
        p_pizze:p_rosticceria;
    var arrei = []; var prezzi = [];
    var descrizioni = [];
    if (tipo == t_pizza) {
        arrei = pizze;
        prezzi = prezzi_p;
        descrizioni = descrizioni_p;
    } else if (tipo == t_rosticceria) {
        arrei = rosticceria;
        prezzi = prezzi_r;
        descrizioni = descrizioni_r;
    }
    var centro = document.getElementById("centro");
    centro.innerHTML = `<table id="menupizze" ></table>`;
    var tabella = document.getElementById("menupizze");
    tabella.innerHTML = "";
    for (var i = 0; i < arrei.length; i++) {
        tabella.innerHTML = `${tabella.innerHTML}${setRiga(arrei,prezzi,tipo,i)}`;
        if (i == numero){
            tabella.innerHTML = `${tabella.innerHTML}${setDescrizione(descrizioni[i],tipo,numero)}`;
        }
    }
    saveLocal();
}

function riepilogo() {
    ultima_pagina=p_riepilogo;
    const prezzo = new Intl.NumberFormat('it-IT',
    { style: 'currency', currency: 'EUR',
        minimumFractionDigits: 2 });

    var totale=0;

    var centro = document.getElementById("centro");
    var intro = "";
    var outro = "";
    if (nEl != 0) {
        intro = "<div class=\"centrotext\" style=\"background-color:transparent;color:var(--main-fg-color);\"><p>" +
            "Riepilogo di quello che vuoi ordinare:"+
        "</p></div>";
        outro = "<div class=\"centrotext\" style=\"background-color:transparent;color:var(--main-fg-color);\"><p>" +
            "Segnalo su un foglio e chiama subito per ordinare! <a href=\"tel:+39 3200754460\">3200754460</a>"
        "</p></div>";
        centro.innerHTML = intro;
        centro.innerHTML = `${centro.innerHTML}<div><table id="menupizze"></table></div>`;
        centro.innerHTML = centro.innerHTML + outro;
    } else {
        intro = "<div class=\"centrotext\"><p>" +
            "Non vuoi ordinare niente? &#129402;<br><br>"+
            "Se cambi idea, entra nel menu pizzeria, seleziona il simbolo " + adds + " sui prodotti che desideri e torna qui a vedere il totale!<br><br>" +
            "Quando hai finito chiamaci al <a href=\"tel:+39 3200754460\">3200754460</a> e ordina &#128521;"+
        "</p></div>";
        outro="";
        centro.innerHTML = intro;
        saveLocal();
        return;
    }   
    var qta=0;
    var delta=0;
    var tabella = document.getElementById("menupizze");
    for (var i=0; i< carrello[0].length; i++){
        qta=carrello[0][i];
        if(!qta || qta==0) continue;
        delta=qta* parseFloat(prezzi_p[i].replace(',','.'))
        totale+=delta;
        tabella.innerHTML = `${tabella.innerHTML}
        <tr>
            <th>${qta}${moltiplicatore}${pizze[i]}</th>
            <th style="text-align: right;">${prezzo.format(delta)}</th>
            <th style="text-align: center;" onclick=aggiungiCarrello(0,${i})>${adds}</th>
            <th style="text-align: center;" onclick=rimuoviDalCarrello(0,${i})>${removes}</th>
        </tr>`;
    }
    for (var i=0; i< carrello[1].length; i++){
        qta=carrello[1][i]
        if(!qta || qta==0) continue;
        delta=qta* parseFloat(prezzi_r[i].replace(',','.'))
        totale+=delta;
        tabella.innerHTML = `${tabella.innerHTML}
        <tr>
            <th>${qta}${moltiplicatore}${rosticceria[i]}</th>
            <th style="text-align: right;">${prezzo.format(delta)}</th>
            <th style="text-align: center;" onclick=aggiungiCarrello(1,${i})>${adds}</th>
            <th style="text-align: center;" onclick=rimuoviDalCarrello(1,${i})>${removes}</th>
        </tr>`;
    }
    
    if (totale != 0) {
        tabella.innerHTML = `${tabella.innerHTML}<tr style:"background-color:var(--headfoot-bg-color);color:var(--headfoot-fg-color);">
            <th>TOTALE</th>
            <th>${prezzo.format(totale)}</th>
            <th></th>
            <th onclick="svuotaCarrello()">${trashs}</th>
        </tr>`;
    }
    saveLocal();
}

function info() {
    ultima_pagina=p_info;
    var centro = document.getElementById("centro");

    centro.innerHTML = "";
    centro.innerHTML = `<div class="centrotext"><p>${informazioni}</p></div>`;
    saveLocal();
}

function setRiga(el,prezzo,tipo,i){
    var ritornato=`
    <tr onclick="dettagli('${tipo}',${i})">
        <th>${el[i]}</th>
        <th>${prezzo[i]}&euro;</th>
        <th onclick="segna('${tipo}',${i})" style="color:white;text-align: center;vertical-align: middle;">${adds}</th>
    </tr>`;

    return ritornato;
}
function setDescrizione(el){
    var ritornato=`
    <tbody class="descrizioni">
        <tr>
            <th class="descrizioni">${el}</th>
            
        </tr>
    </tbody>`;
    return ritornato;
}

function aggiungiCarrello(tipo, numero){
    carrello[tipo][numero]++;
    nEl++;
    riepilogo();
}

function segna(tipo, numero) {
    var el=(tipo==t_pizza)
    ?
        pizze[numero]
    :
        rosticceria[numero]
    ;

    if(carrello[tipo][numero])
        carrello[tipo][numero]++;
    else carrello[tipo][numero]=1;
    nEl++;
    
    
    
    mostraPopup(el);
}

function rimuoviDalCarrello(tipo,numero) {
    carrello[tipo][numero]--;
    nEl--;
    riepilogo();
}

function svuotaCarrello(){
    svuotaCache();
    riepilogo();
}

function mostraPopup(el){
    var popup = document.getElementsByClassName("popup")[0];
    popup.innerHTML = `<p>prodotto aggiunto al riepilogo: ${el} ${check}</p>`;
    popup.classList.remove("popup-hidden");
    popup.classList.add("popup-visible");

    hidePopup();
}

async function hidePopup() {
    var popup = document.getElementsByClassName("popup")[0];
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    popup.classList.remove("popup-visible");
    popup.classList.add("popup-hidden");
    await new Promise(resolve => setTimeout(resolve, 1000));
    popup.innerHTML = "";
}



function mostraEmail(){
    var popup = document.getElementsByClassName("popup")[0];
    popup.innerHTML = `<div onclick="hidePopup()"
    >
        Email: <a href="mailto:psdady@msn.com">psdady@msn.com</a>
    </div>`;
    popup.classList.remove("popup-hidden");
    popup.classList.add("popup-visible");

}
