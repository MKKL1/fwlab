const express = require("express")
const path = require("path")
const handleBars = require("handlebars")
const exphbs = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access")
const app = express()
const db = require('./db')
const studentController = require('./controllers/StudentController')

app.use(express.urlencoded({
    extended: true
}))

app.set("views", path.join(__dirname, "views"))
app.engine(
    "hbs",
    exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handleBars),
        extname: "hbs",
        defaultLayout: "layout",
        layoutsDir: path.join(__dirname, "views", "layouts")
    })
)
app.set("view engine", "hbs")
app.listen(3000, () => {
    console.log("Serwer nasłuchuje na porcie 3000")
})

app.get("/", studentController.index)
app.get("/list", studentController.list)
app.get("/addOrEdit", studentController.addOrEdit)
app.post("/", studentController.insertOrUpdate)
app.get("/user/:id", studentController.getUser)
app.get("/delete/:id", studentController.deleteUser)

module.exports = app
