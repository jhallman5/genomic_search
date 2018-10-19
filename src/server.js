const express = require('express')
const path = require('path')
const routes = require('./controller/routes')

const server = express()
const PORT = process.env.PORT || 3000

server.use(express.static(path.join(__dirname, '../dist')))

server.use(routes)

server.listen(PORT, () => {
  console.log('Server is running on port: ', PORT)
})
