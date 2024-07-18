import { Component } from '@angular/core';
import { add, subtract } from '../math';

@Component({
  selector: 'app-tree-shaking',
  standalone: true,
  imports: [],
  templateUrl: './tree-shaking.component.html',
  styleUrl: './tree-shaking.component.scss'
})
export class TreeShakingComponent {
  resultAdd!: number;
  resultSubtract!: number;

  ngOnInit() {
    this.resultAdd = add(5, 3); // Using the add function
    this.resultSubtract = subtract(10, 4); // Using the subtract function
  }
}
