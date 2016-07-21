import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
  } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, 
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewChecked,
OnDestroy
 {

@Input() 
bindable = 1000;

@ViewChild('boundParagraph')
boundParagraph: HTMLElement;
  
@ContentChild('boundContent')
boundContent: HTMLElement; 
  
  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnInit() {
      this.log('ngOnInit');
  }
  ngDoCheck() {
      this.log('ngDoCheck');
  }
  ngAfterContentInit() {
      this.log('AfterContentInit');
      console.log(this.boundContent);
      
  }
  ngAfterContentChecked() {
      this.log('ngAfterContentChecked');
  }
  ngAfterViewChecked() {
      this.log('ngAfterViewChecked');
      //console.log(this.boundParagraph);
  }
  ngOnDestroy() {
      this.log('ngOnDestroy');
  }
  private log(hook: string) {
    console.log(hook);
  }

}
