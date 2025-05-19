const express = require('express');
const app = express();

const character_routes = require('./routes/character_routes');
const gadget_routes = require('./routes/gadget_routes');

app.use(express.json());

app.use(character_routes);
app.use(gadget_routes);

app.get('/', (req, res) => 
{
    res.send('Doraemon API up');
});

app.listen(8080, () => 
{
    console.log('Server running on 8080');
});
