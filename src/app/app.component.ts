import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template:   `
    <h1>Root Component</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
    <p #boundContent>{{test}}</p>
    <br><br>
    </app-lifecycle>
    <button (click)="delete = true">Click to delete</button>
    <button (click)="test = 'Changed value'">Click to Change</button>
    <button (click)="boundValue = 2000">Click to Binding</button>
            `,
  directives: [ LifecycleComponent ]
})
export class AppComponent {
  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
