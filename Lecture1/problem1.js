Array.prototype.filt = function() {
    var arr = this ; 
    return new Promise(function(resolve , reject){
        resolve(arr.filter(x =>  x != 1))
    })
  };

  console.log("start");

[1, 2, 3].filt()
    .then(function(result){
    console.log(result);
});

console.log("End");

// Question B
// because it makes new promise and the new promise will be in webAPI and then put them in callback queue 
// that need the event loop to check the empty stack to push one to the stack 