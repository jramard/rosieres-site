const express = require('express');
const cors = require('cors');
const readXlsxFile = require('read-excel-file/node');
const app = express();
const port = 3000;

app.use(cors());

app.get('/data', (req, res) => {
    readXlsxFile('../data.xlsx').then((rows) => {
        res.send(rows);
    });
});

app.listen(port, () => console.log('Server is running!'));