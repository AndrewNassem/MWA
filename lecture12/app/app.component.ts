import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: "counter compontent {{value?}}  <counter [counter] = '2'  (counterChange)='changed($event)' ></counter> <br> counter compontent  <counter [counter] = 2  (counterChange)='changed($data)' ></counter> ",
  styles: ['']
})
export class AppComponent {
  title = 'write your name ';
  value  = 0;
  doSomething() {
    console.log("Enter")
  }
  displayCounter(data) {
    console.log(data);
  }

  changed(data : String) {
    this.value = data;
    console.log("data is " + data);
  }


}
