import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: string, repeat: number): any {
    var result:string = "";
    var i:number ;
    for (i = 0 ; i < repeat ; i++){
      result += value ;
    }
    return result ;
  }

}
