const express = require('express')
const app = express()
const PORT = 3000
// fs.writeFile
const path = require('path')
// const data = require('./Develop/db/db.json')

// app.use(express.static(path.join(__dirname, 'public')));

//index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

//database
app.get('/api/notes', (req, res) => {
    //     var arrNotes = [
    //     {
    //         "title":"Test Title",
    //         "text":"Test text"
    //     }
    //  ]
        // TODO: Possible way - save arrNotes as the contents from db/db.json

    res.sendFile(path.join(__dirname, "db/db.json"))
})



//     fs.readFile(path.join(__dirname, "db/db.json"), {encoding:"utf-8"}, (err, data)=>{
//         if(err) {
//             throw err;
//             // console.log(err);
//         }

//         console.log(data)
//         console.log(typeof(data))

//         // Self mutate the data into an array
//         data = JSON.parse(data);

//         res.json(data)
//     })

// })

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