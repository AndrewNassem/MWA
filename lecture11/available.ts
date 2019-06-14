export function addAvailable(val:boolean){
    return function(targetClass: Function){
        return class{
            availeble=val;
            //name= new target().ds
        }
    }
}