const {Student} = require('../student.js')

async function insert(req, res) {
    let student = new Student()
    student.fullName = req.body.fullName
    student.email = req.body.email
    student.mobile = req.body.mobile
    student.city = req.body.city
    try {
        await student.save()
        res.redirect("/list")
    } catch (err) {
        console.log("Błąd podczas dodawania studenta: " + err)
    }
}
async function update(req, res) {
    try {
        await Student.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
        res.redirect("list")
    } catch (err) {
        console.log("Błąd podczas aktualizowania danych:  " + err)
    }
}



exports.index = function(req, res) {
    res.send(`
 <h3 style="text-align:center">Baza danych studentów</h3>
 <h4 style="text-align:center">Kliknij <a href="/list"> tutaj</a>, aby uzyskać dostęp do bazy.</h4>`)
}

exports.list = function(req, res) {
    Student.find().then((docs) => {
        res.render("list", {
            list: docs
        })
    }).catch((err) => {
        console.log("Błąd pobierania danych" + err)
    })
}

exports.addOrEdit = function(req, res) {
    res.render("addOrEdit", {
        viewTitle: "Dodaj studenta"
    })
}
exports.insertOrUpdate = function(req, res) {
    if (req.body._id === "") {
        return insert(req, res)
    } else {
        return update(req, res)
    }
}

exports.getUser = function(req, res) {
    Student.findById(req.params.id).then((doc) => {
        res.render("addOrEdit", {
            viewTitle: "Zaktualizuj dane studenta",
            student: doc
        })
    }).catch((err) => {
        console.log("Błąd podczas aktualizowania danych (:id): " + err)
    })
}

exports.deleteUser = function(req, res) {
    Student.findByIdAndDelete(req.params.id).then((doc) => {
        res.redirect("/list")
    }).catch((err) => {
        console.log("Błąd podczas usuwania: " + err)
    })
}