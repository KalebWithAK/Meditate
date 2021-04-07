const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello world')
})

router.get('/meditationdata', (req, res) => {
    fs.readFile('./datasets/meditationData.json', (err, data) => {
        if (err) throw err

        const sessions = JSON.parse(data)
        res.send(sessions)
    })
})

router.get('/startsession')

router.post('/addsession', (req, res) => {
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

module.exports = router