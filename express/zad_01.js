const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const {check, validationResult} = require('express-validator')
const users = require('./users.js')



app.use(express.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    res.send('Szklielet programistyczny Express!')
})

app.get('/about', function (req, res) {
    res.send('Autor strony: Jan Kowalski')
})

app.get('/name/:imie', function (req, res) {
    res.setHeader('content-type', 'text/html')
        .status(200)
        .send(`
        <!DOCTYPE html>
        <html lang="en">
            <body>
                <h1>Siema ${req.params.imie}</h1>
            </body>
        </html>
        `)
})

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})

app.post('/result',[
    check('username').isLength({min: 3, max: 25}).withMessage("Incorrect username").trim(),
    check('password').isStrongPassword(),
    check('lang').isArray()
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    }

    let username = req.body.username
    let password = req.body.password
    let langs = req.body.lang
    res.send(`Użytkownik: ${username} <br>Hasło: ${password} <br>
    Języki: ${langs.reduce((acc, curr) => acc + ', ' + curr, "")}
`)
})

app.get('/api/users', (req, res) => {
    res.json(users)
})
app.get('/api/users/:id', (req, res) => {
    if(users.some(user => user.id === parseInt(req.params.id))) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({msg: `Użytkownik o id ${req.params.id} nie został odnaleziony`})
    }
})

app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        status: "aktywny"
    }
    console.log(req.body)

    if(!newUser.name || !newUser.email) {
        return res.status(400).json({msg: 'Wprowadź poprawne imię i nazwisko oraz email!'})
    }
    users.push(newUser)
    res.json(users)
})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))