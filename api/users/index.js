const _ = require("lodash");


let db = [];
function fillDB() {
    for (var x = 0; x < 6; x++) {
        db.push({ name: "Alexa" + _.random(0, 100), age: 24 + _.random(0, 50) });
    }
}

//API REST USERS
app.get('/getusers', (req, res) => {
    res.send(db);
});

app.post('/adduser', (req, res) => {
    const { name, age } = req.body;
    if (name != null && age != null) {
        db.push({ name: name, age: parseInt(age) });
        res.send(db);
    }
    else res.send("No se han proporcionado todos los campos necesarios");
});