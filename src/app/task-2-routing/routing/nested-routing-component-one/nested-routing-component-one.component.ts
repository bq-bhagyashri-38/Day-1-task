import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nested-routing-component-one',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './nested-routing-component-one.component.html',
  styleUrl: './nested-routing-component-one.component.scss'
})
export class NestedRoutingComponentOneComponent {

}
