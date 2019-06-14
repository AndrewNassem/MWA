import { Component, OnInit } from '@angular/core';
import { OnlineDataService } from '../online-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  template: '  <p >lllll  </p> <br> <button (click) = "get_products()">get Products  </button> <br> <p>{{returnedData}}</p>',
  styles: ['']
})
export class MainComponentComponent  {
  returnedData :string ;
  constructor(private onlineData:OnlineDataService , private httpClient:HttpClient){
    this.set_products();
  }

  set_products(){
    this.httpClient.get('https://randomuser.me/api/?results=10').subscribe((res)=>{
        this.onlineData.setOnlineData(JSON.stringify(res));
    });
  }

  get_products(){
    this.returnedData = this.onlineData.getOnlineData()
    console.log(this.returnedData)

  }
}

