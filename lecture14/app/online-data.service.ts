import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineDataService {

  constructor() { }


  getOnlineData() {
    return localStorage.getItem('data')
  }
  setOnlineData(input: string) {
    localStorage.setItem('data', input)
  }


  getItemById(id: number) {
    var obj = JSON.parse(localStorage.getItem('data'));
    console.log(obj.results)
    var i = 0;
    for (i = 0; i < obj.results.length; i++) {
      console.log(obj.results[i])
      if (obj.results[i].id.value == id)
        return obj.results[i]
    }
    // console.log(this.data)
  }


}
