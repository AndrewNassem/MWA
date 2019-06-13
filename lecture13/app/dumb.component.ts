import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dumb',
  template: `
    <p *ngFor = "let name of data" >
      Hello {{name}}
    </p>
    <div [IsVisible]= "true">data is here </div>
    <div>{{name|multi:5}}</div>
    <div Bigger>Bigger Me</div>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() data:string[];
  name = "Andrew"
  constructor() { }

  ngOnInit() {
  }

}
