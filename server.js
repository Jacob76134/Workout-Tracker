const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const mongoose = require('mongoose')
const db = require('./models')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_CONNECT || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(PORT, () => {
    console.log('server running...')
})

module.exports = mongoose