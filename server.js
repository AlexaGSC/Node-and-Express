const express = require('express');
const app = express();

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

app.listen(3000, ()=> console.log('Ready on port 3000!'));
