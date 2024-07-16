import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {

}
