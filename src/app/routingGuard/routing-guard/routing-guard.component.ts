import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-guard',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './routing-guard.component.html',
  styleUrl: './routing-guard.component.scss'
})
export class RoutingGuardComponent {

}
