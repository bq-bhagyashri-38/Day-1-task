import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
email:string= "Email: info@restaurant.com";

}
