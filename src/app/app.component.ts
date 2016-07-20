import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template:   `<app-databinding>
  
              </app-databinding>
            `,
  directives: [ DatabindingComponent]
})
export class AppComponent {
  title: string = 'This is live!!';
  content: string = 'Time to kick some ass!!'
}
