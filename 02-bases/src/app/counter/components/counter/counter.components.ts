import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:   `
  <h1>Hola counter</h1>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseby()">+1</button>
<button (click)="increaseby()">-1</button>
`,
})

export class CounterComponent{
  public title:string = 'Mi primera app';
  public counter: number = 10;

  increaseby():void {
    this.counter +=1;


  }

}
