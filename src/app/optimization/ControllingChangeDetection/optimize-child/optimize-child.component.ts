import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-optimize-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './optimize-child.component.html',
  styleUrl: './optimize-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizeChildComponent {

  @Input() name!: string;
  @Input() present!: boolean;

  constructor(private cdr: ChangeDetectorRef) { }

  notifyTeacher() {
    // Simulate a change in state
    this.present = !this.present;
    // Let Angular know to check for changes in this component
    this.cdr.markForCheck();
    
        // Checking console output for each method
        console.log('markForCheck() output:', this.cdr.markForCheck());
        console.log('detectChanges() output:', this.cdr.detectChanges());
        console.log('detach() output:', this.cdr.detach());
        console.log('reattach() output:', this.cdr.reattach());
        console.log('checkNoChanges() output:', this.cdr.checkNoChanges());
    
    
  }
}
