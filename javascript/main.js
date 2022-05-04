let zufallszahl1 = 50;
let zufallszahl2;
let anzahlRichtig;

document.getElementById("zufallszahl").innerHTML = zufallszahl1

function hoeher(){
    zufallszahl2 = Math.round(Math.random()*100)
    document.getElementById("zufallszahl").innerHTML = "Die Zufallszahl ist " +
        zufallszahl2 + "!"
    if (zufallszahl2 > zufallszahl1){
        anzahlRichtig = anzahlRichtig + 1
        zufallszahl1 = zufallszahl2
        document.getElementById("anzahlRichtig").innerHTML = "Richtig! " + "Du hast bisher " +
            anzahlRichtig + " mal richtig gelegen!"
    } else {
        anzahlRichtig = 0
        document.getElementById("anzahlRichtig").innerHTML = "Falsch! Deine Streak wird " +
            " auf 0 zurückgesetzt!"
    }
}

function tiefer(){
    zufallszahl2 = Math.round(Math.random()*100)
    document.getElementById("zufallszahl").innerHTML = "Die Zufallszahl ist " +
        zufallszahl2 + "!"
    if (zufallszahl2 < zufallszahl1){
        anzahlRichtig = anzahlRichtig + 1
        zufallszahl1 = zufallszahl2
        document.getElementById("anzahlRichtig").innerHTML = "Richtig! " + "Du hast bisher " +
            anzahlRichtig + " mal richtig gelegen!"
    } else {
        anzahlRichtig = 0
        document.getElementById("anzahlRichtig").innerHTML = "Falsch! Deine Streak wird " +
            " auf 0 zurückgesetzt!"
    }
}