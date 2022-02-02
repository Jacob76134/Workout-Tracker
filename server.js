const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const apiRoutes = require("./routes/api-routes");
const viewRoutes = require("./routes/view-routes")

const dotenv = require('dotenv')
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(apiRoutes);
app.use(viewRoutes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(PORT, () => {
    console.log('server running...');
});

module.exports = mongoose;