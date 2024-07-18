import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  id: number;
  name: string;
}

@Component({
  selector: 'app-track-by-function',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './track-by-function.component.html',
  styleUrl: './track-by-function.component.scss'
})
export class TrackByFunctionComponent {

  students: Student[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Charlie' },
  ];

  trackByFn(index: number, student: Student): number {
    console.log(student.id);
    
    return student.id+1; 
  }
}
