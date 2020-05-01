'use strict'

const express = require('express')

const { PORT = '80' } = process.env
const app = express()

app.use((req, res, next) => {
  res.send('docker with nodejs')
})

app.listen(PORT)
