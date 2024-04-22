const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/StudentDB", { useNewUrlParser: true })
    .then((result) => {
        console.log("Połączono z bazą")
    }).catch((err) => {
    console.log("Nie można połączyć się z MongoDB. Błąd: " + err)
})