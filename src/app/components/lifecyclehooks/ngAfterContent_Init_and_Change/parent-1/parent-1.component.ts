import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';

@Component({
  selector: 'app-parent-1',
  standalone: true,
  imports: [],
  templateUrl: './parent-1.component.html',
  styleUrl: './parent-1.component.scss'
})
export class Parent1Component implements AfterContentInit, AfterContentChecked{

  @ContentChild(Child1Component , { static: false }) childComponent!:Child1Component

  dynamicData = 'Initial Data';

  ngAfterContentInit() {
    // After content initialization, send initial data to child component
    if (this.childComponent) {
      this.childComponent.receiveData(this.dynamicData);
    }
  }

  ngAfterContentChecked() {
    // After content checked, continue sending updated data to child component
    if (this.childComponent) {
      this.childComponent.receiveData(this.dynamicData);
    }
  }

  updateData(newData: string) {
    // Update data and notify child component
    this.dynamicData = newData;
    if (this.childComponent) {
      this.childComponent.receiveData(this.dynamicData);
    }
  }
}
