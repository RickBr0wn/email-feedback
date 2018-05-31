const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

mongoose.connect()

const app = express(keys.mongoURI)

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)

