//  Written Excercises

//  1) we are using settimeout when we need to make time before execute the function 
//  but setImmediate is executing immeditaly after the V8 is being empty and check the nextTick queue and queueMicrotask queue
//  also if we made setTimeout with 0 time , it will also slower than setImmediate because it will check the time 
//  one time at least , so setImmediate is better in that way 


//  2 ) process.nextTick has periorty more than setImmediate , because it has it's own queue , it called 
//  next Tick queue , and this queue is the most powerful queue , because it has the most periorty than 
//  the other queues , so if there is anything inside next tick queue , it will execute before setImmediate


// 3) assert , buffer , child_process , cluster , crypto , dgram , dns , domain , events , fs  , http , net



Array.prototype.pluck = function(bool){
    var arr = this ; 
    if(bool){
        setTimeout( function(){
             console.log(Math.max.apply(null , arr)) ; 
        } , 1000);
    }
    else{
        setImmediate(() => (console.log(Math.min.apply(null , arr))));
    }
}
console.log("start");
[1,2,3,4,5,6,7].pluck(false);
console.log("End");
