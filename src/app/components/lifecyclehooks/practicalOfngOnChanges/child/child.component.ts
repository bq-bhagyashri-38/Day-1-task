import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges{
  
  @Input() data?: string;
  lifecycleTicks: number = 0;


  ngOnChanges() {
    this.lifecycleTicks++;
  }
}
