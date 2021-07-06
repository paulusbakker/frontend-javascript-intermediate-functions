// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie? ->de array doorlopen met een for loop
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? ->bepaal de lengte van de array en laat de loop hiernaar doorlopen
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden? ->opslaan in een teller
// Log het antwoord in de terminal.

let counter = 0
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        counter++
    }
}
console.log(counter)

// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(grades) {
    let counter = 0
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            counter++
        }
    }
    console.log(counter)
}

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

cumLaude(grades)
cumLaude([6, 4, 5])
cumLaude([8, 9, 4, 6, 10])

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend? ->de verschillende items van de array optellen en delen door het aantal items
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? ->de som van de items
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

let sum = 0
for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
}
const median = sum / grades.length
console.log(median)


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrade(grades) {
    let sum = 0
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i]
    }
    const median = sum / grades.length
    console.log(median)
}

averageGrade(grades)
averageGrade([6, 4, 5])
averageGrade([8, 9, 4, 6, 10])

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeRounded(grades) {
    let sum = 0
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i]
    }
    let median = sum / grades.length
    const roundedMedian = Math.round(median * 100) / 100
    console.log(roundedMedian)
}

averageGradeRounded(grades)
averageGradeRounded([6, 4, 5])
averageGradeRounded([8, 9, 4, 6, 10])

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan? ->met een loop
// * Op welke conditie moet ik checken? ->of dit het hoogste cijfer is wat er tot nu toe is tegengekomen
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan? ->in een aparte variabele
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
let highest = 0
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highest) {
        highest = grades[i]
    }
}
console.log(highest)


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(grades) {
    let highest = 0
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i]
        }
    }
    console.log(highest)
}

highestGrade(grades)
highestGrade([6, 4, 5])
highestGrade([8, 9, 4, 6, 10])
