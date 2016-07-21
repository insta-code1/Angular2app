import { Component, OnInit } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { TestingComponent } from './testing.component';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, TestingComponent]
})
export class DatabindingComponent {
    stringInterpolation = 'This is string interpolation!';
    numberInterpolation = 2;

    onTest() {
      return true;
    }

    onClicked(value: string) {
      alert(value)
    }

    testclick(value: Boolean) {
      alert(value)
    }
}
