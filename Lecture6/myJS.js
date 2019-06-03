const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const app = express();
var fs = require('fs')



var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

var item = [{ id: 1, name: "Andrew Nassem", course: "CS572", grade: 100 },
{ id: 2, name: "Asaad Saad", course: "CS572", grade: 95 }];
app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('*', verify, (req, res, next) => {
    console.log(item)
    res.end(JSON.stringify(item))
})

function verify(req, res, next) {
    if (Object.keys(req.query).length !== 0) {
        try {
            JSON.parse(req.body);
        } catch (e) {
            res.status(403).send("error data");
        }
        return next()

    }
    else next();
}


app.post('*', verify, (req, res, next) => {
    console.log(req.body)
    var new_item = req.body;
    item.push(new_item);
    res.end(JSON.stringify(item));
    // console.log(JSON.stringify(new_item))
})


app.delete('*', (req, res, next) => {
    console.log(req.query.id)
    var id = req.query.id;
    for (let i = 0; i < item.length; i++) {
        if (item[i].id == id) {
            item.splice(i, 1)
        }
    }
    res.end(JSON.stringify(item));
    // console.log(JSON.stringify(new_item))
})
app.listen(4000);
