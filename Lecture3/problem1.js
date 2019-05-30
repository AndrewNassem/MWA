const dns = require('dns');
const {promisify} = require('util');

// dns.resolve4('www.mum.edu' , (err , data) => console.log(data));


var resolvePromisfy = promisify(dns.resolve4);

async function f(){
    try{
        const ip =await resolvePromisfy('www.mum.edu');
        console.log(ip);
    }catch(err){
        console.log(err);
    }
}

f() ;
