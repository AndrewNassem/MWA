import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart',
  template: `
    <dumb [data] ="data"></dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  data:string[]= ['Andrew' , 'Arsany' , 'Elza']
  constructor() { }

  ngOnInit() {
  }

}
