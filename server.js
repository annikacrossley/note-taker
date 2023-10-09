const express = require('express')
const app = express()
const PORT = 3000
// fs.writeFile
const path = require('path')
const data = require('./data/db.json')

app.use(express.static(path.join(__dirname, 'public')))

//index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

//api routes 
app.get('/api/notes', (req, res) => {
    res.json(data)
})

app.post('/api/notes', (req, res) => {

})


// //app.post ...
// // once data is an array
// // thats the older notes
// // you need to add the new note to the older notes
// //   - data.push(newNote)
// //                ^ is an object from fetch's body

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, `/public/notes.html`))
// })


// app.get('/info', (req, res) => {
//     res.send('Coming soon. This will be a notepad app!')
// })

app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`)
})