const poniedzialek = [
    {
        'nazwa': 'Przygotowania do zajęć z AI',
        'czas': 180
    },
    {
        'nazwa': 'Realizacja projektu z AI',
        'czas': 120
    }
]
const wtorek = [
    {
        'nazwa': 'Rozbudowa swojego bloga',
        'czas': 240
    },
    {
        'nazwa': 'Administrowanie serwisem szkoly',
        'czas': 180
    },
    {
        'nazwa': 'Sluchanie koncertu online',
        'czas': 240
    }
]
let a = Array.of(poniedzialek, wtorek).reduce((acc, x) => [...acc, ...x], [])
    .map(x => x.czas /= 60)
    .filter(x => x > 2)
    .map(x => x * 35)
    .reduce((acc, x) => acc += x, 0)
console.log(a + ".00 zł")
