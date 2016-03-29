'use strict'

const express = require('express')
  ,   app = express()
  ,   server = require('http').createServer(app)
  ,   ws = require('socket.io')(server)
  ,   PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Anything?')
})

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

ws.on('connection', socket => {
  console.log('socket Connected')
})