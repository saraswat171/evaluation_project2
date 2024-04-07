const express = require('express');
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use('/', require('./route'))
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

