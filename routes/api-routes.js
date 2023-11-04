const nn = require('express').Router();
const uuid = require('../helpers/uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

//GET /api/notes
nn.get('/api/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

//POST /api/notes
nn.post('/api/notes', (req, res) => {
    // receive a new note to save on the request body
    const { note } = req.body;
    if (note) {
        const newNote = {
            note,
            note_id: uuid()
        };

        //add it to the db.json file
        readAndAppend (newNote, './db/db.json');
        
        //return the new note to the client
        const response = {
            status: 'success',
            body: newNote
        };

        res.json(response);
    } else {
        res.json('Error posting note.')
    }
});

module.exports = nn;