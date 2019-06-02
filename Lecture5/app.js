var express = require("express")

var app = express();
var axios =require('axios');
var {from} = require('rxjs');
var {shareReplay} = require('rxjs/operators');

app.set('x-powered-by', false);
app.enable('strict routing');
app.enable('case sensitive routing')


app.get('/users' , (req , res) => {
    var obs$ = from(axios.get('https://randomuser.me/api/?results=1')).pipe(shareReplay(1))
    obs$.subscribe((data) =>{
        console.log(data.data)
        // res.write(data)
        res.set("Link","/users?page=2") 
        res.set('Cache-Control', 'private, max-age=86400000');
        res.end()
})

})
