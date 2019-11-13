const express = require('express');
const app = express();
app.use(express.json());

const users = [{ id: 0, name: 'Pepe'}, { id: 1, name: 'Juan'}];

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    
    if (!isNaN(parseInt(req.params.id, 10))){
        const userId = req.params.id
        const user = users.find(user => user.id == userId)
        
        res.json(user)
    }
    else{
        res.json({ status: 'Error id'})
    };

});

app.get('/dice/:id',(req,res) => {
    const diceNumber = req.params.id;
    function rollDice(diceNumber){
    const valor = (Math.ceil(Math.random()* diceNumber));
    return valor;
 };

 res.json(rollDice(diceNumber));
});

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = Math.random();
    users.push(newUser);
    res.json(newUser);
});

app.post('/usersP', (req, res) => {
    if(Object.keys(req.body).length === 0){
        res.status(400).send('debe pasar algo por el body')
    }
    else {
        const newUser = req.body
        newUser.id = Math.random();
        users.push(newUser);
        res.json(newUser);
    }
});


const mandatoryField = (mandatory, bodyJSON) => {

    if (bodyJSON) {
        return false;
    }

    const stringJSON = JSON.stringify(bodyJSON)
    let validationsCount = 0;

    mandatory.forEach(element => {
        if (stringJSON.includes(element)) {
            validationsCount += 1;
        }
    });

    if (validationsCount == mandatoryField.length) {
        return true;
    } else {
        return false;
    }
}

app.listen(3000, ()=> console.log('Ready on port 3000!'));
