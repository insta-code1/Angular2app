import { Component } from '@angular/core';
import { OtherComponent } from './other';
import { AnotherComponent } from './other';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
              <h1>
              {{title}}
              </h1>
              <p1>
              {{content}}
              </p1>
              <app-other></app-other>
              <app-another>
              <h1>Hello!</h1>
              <p1>World!</p1>
              </app-another>
              <app-another>
              <p>something else...</p>
              </app-another>
            `,
  styles: [`
          h1 {
            color: red;
          }
          `],
  directives: [OtherComponent, AnotherComponent]
})
export class AppComponent {
  title: string = 'This is live!!';
  content: string = 'Time to kick some ass!!'
}
