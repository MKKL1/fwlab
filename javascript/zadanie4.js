const firmy = [
    {nazwa:"Abasco", kategoria:"IT", poczatek:1999, koniec:2010},
    {nazwa:"Redis", kategoria:"IT", poczatek:1993, koniec:1998},
    {nazwa:"Komp", kategoria:"IT", poczatek:2003, koniec:2018},
    {nazwa:"Bosco", kategoria:"Technologie", poczatek:2011, koniec: 2014},
    {nazwa:"CCA", kategoria:"IT", poczatek:1991, koniec:1995},
    {nazwa:"Autosan", kategoria:"Auto", poczatek:2009, koniec: 2018},
    {nazwa:"Broke", kategoria:"Finanse", poczatek:1990, koniec: 1992},
    {nazwa:"Funds", kategoria:"Finanse", poczatek:2000, koniec: 2021}
]

console.log(firmy.filter(x => x.kategoria === "IT"))
console.log(firmy.filter(x => x.poczatek >= 1990 && x.koniec < 2000))
console.log(firmy.filter(x => x.poczatek-x.koniec > 10))