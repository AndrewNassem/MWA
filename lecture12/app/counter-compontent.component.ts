import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <button (click) ="increase()"> + </button> {{counterValue}} <button (click)="decrease()"> - </button>
  `,
  styles: []
})
export class CounterCompontentComponent implements OnInit {
  counterValue: number = 0;

  @Input() counter: number;

  @Output() counterChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    if (this.counter)
      this.counterValue = this.counter;
  }

  increase() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  decrease() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }

}
