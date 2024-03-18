const listaZadan = [
    {
        id: 1,
        tekst: "Zrobienie zakupów",
        zrealizowano: true
    },
    {
        id: 2,
        tekst: "Przegląd techniczny samochodu",
        zrealizowano: false
    },
    {
        id: 3,
        tekst: "Wizyta u dentysty",
        zrealizowano: false
    },
]

listaZadan.forEach(x => console.log(x.tekst))

console.log(listaZadan.map(x => x.tekst));

console.log(listaZadan.filter(x => x.zrealizowano === true).map(x => x.tekst))