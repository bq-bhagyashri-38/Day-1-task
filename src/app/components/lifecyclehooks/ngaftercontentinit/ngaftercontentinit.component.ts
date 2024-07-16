import { Component } from '@angular/core';
import { Child1Component } from "../ngAfterContent_Init_and_Change/child-1/child-1.component";

@Component({
  selector: 'app-ngaftercontentinit',
  standalone: true,
  imports: [Child1Component],
  templateUrl: './ngaftercontentinit.component.html',
  styleUrl: './ngaftercontentinit.component.scss'
})
export class NgaftercontentinitComponent {

}
