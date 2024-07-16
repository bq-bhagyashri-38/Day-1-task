import { Component } from '@angular/core';
import { NgOnChangeComponent } from "../lifecyclehooks/ng-on-change/ng-on-change.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [NgOnChangeComponent,RouterLink ],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent {

}
