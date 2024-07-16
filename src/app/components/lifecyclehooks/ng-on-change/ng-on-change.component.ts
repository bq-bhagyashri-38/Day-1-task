import { Component } from '@angular/core';
import { ChildComponent } from "../practicalOfngOnChanges/child/child.component";
import { ParentComponent } from "../practicalOfngOnChanges/parent/parent.component";

@Component({
  selector: 'app-ng-on-change',
  standalone: true,
  imports: [ChildComponent, ParentComponent],
  templateUrl: './ng-on-change.component.html',
  styleUrl: './ng-on-change.component.scss'
})
export class NgOnChangeComponent {

}
