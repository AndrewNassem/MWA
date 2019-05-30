
var event = require('events');
class Gym extends event.EventEmitter{
    constructor(){
        super() ; 
    }

    boom(){
        var that = this;
        setInterval(function(){
            that.emit("boom", "Athletics is working out" );
        } , 1000);
    }
}

var gym  = new Gym() ; 

gym.on("boom" , (data) => console.log(data));
gym.boom();
