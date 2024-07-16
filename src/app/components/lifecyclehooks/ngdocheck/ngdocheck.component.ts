import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ngdocheck',
  standalone: true,
  imports: [],
  templateUrl: './ngdocheck.component.html',
  styleUrl: './ngdocheck.component.scss'
})
export class NgdocheckComponent implements DoCheck{
  lifecycleTicks: number = 0;
  oldTheData?: string;
  data: string[] = ['initial'];

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach(); // lets the class perform its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
    }, 6000);
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
  }
}
