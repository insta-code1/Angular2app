import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-testing',
  template: `
  <button (click)="onClick()">Click me!</button>
  `,
  styles: []
})
export class TestingComponent { 
@Output() testclick = new EventEmitter<boolean>();
onClick() {
  this.testclick.emit(true);
  } 
}