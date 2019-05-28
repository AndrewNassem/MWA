// Part A

var myFun =  function(){
    fetch('https://randomuser.me/api/')
    .then(x =>  x.json())
    .then(function(json){
        let list = json.results ; 
        for(let i = 0 ; i <list.length ; i++){
            console.log(list[i].name.first + " " + list[i].name.last  );
            console.log(list[i].location.street + " " + list[i].location.city + " " + list[i].location.state  );
        }
    })
}


// Part B

async function asynFun(){
    let response =  await fetch('https://randomuser.me/api/');
    let json =  await response.json();
    let list = json.results ; 
        for(let i = 0 ; i <list.length ; i++){
            console.log(list[i].name.first + " " + list[i].name.last  );
            console.log(list[i].location.street + " " + list[i].location.city + " " + list[i].location.state  );
        }
}


// Part C 
const {Observable} = rxjs ;  

var result = Observable.fromPromise(fetch('http://myserver.com/'));
result.subscribe(x => console.log(x), e => console.error(e));

myFun();


asynFun();





// All of them are Async 