const express = require('express');
const app = express();
app.use(express.json());

let data = [];

// Create
app.post('/api/data/post', (req, res) => {
    // const item = req.body;
    // data.push(item);
    res.status(201).send({message: 'Successfully posted'});
});

// Read
app.get('/api/data', (req, res) => {
    res.send({message: 'Successfully fetched', data});
});

// Update
app.put('/api/data/:id', (req, res) => {
    // const id = req.params.id;
    // const item = data.find(i => i.id === id);
    // if (!item) return res.status(404).send('Item not found');
    // Object.assign(item, req.body);
    res.send({message: 'Successfully updated', id: req.params.id});
});

// Delete
app.delete('/api/data/:id', (req, res) => {
    // const id = req.params.id;
    // const item = data.find(i => i.id === id);
    // if (!item) return res.status(404).send('Item not found');
    // const index = data.indexOf(item);
    // data.splice(index, 1);
    res.send({message: 'Successfully deleted', id: req.params.id});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
