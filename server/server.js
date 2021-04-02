const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
const port = 3001


app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/meditationdata', (req, res) => {
    fs.readFile('./datasets/meditationData.json', (err, data) => {
        if (err) throw err

        const sessions = JSON.parse(data)
        res.send(sessions)
    })
})

app.get('/startsession')

app.post('/addsession', (req, res) => {
    const newSession = req.body
    fs.readFile('./datasets/meditationData.json', (err, data) => {
        if (err) throw err

        const sessions = JSON.parse(data)
        sessions.push(newSession)
        
        fs.writeFile('./datasets/meditationData.json', JSON.stringify(sessions, null, 2) ,(err) => {
            if (err) throw err
        })
    })
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${ port }`)
})