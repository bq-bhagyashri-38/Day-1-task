import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribing-observable',
  standalone: true,
  imports: [],
  templateUrl: './unsubscribing-observable.component.html',
  styleUrl: './unsubscribing-observable.component.scss'
})
export class UnsubscribingObservableComponent implements OnInit, OnDestroy  {
  message: string = '';
  private subscription!: Subscription;

  ngOnInit() {
    // Example: Subscribing to an Observable (interval)
    this.subscription = interval(1000).subscribe(() => {
      this.message = 'Hello, every second!';
    });
  }

  ngOnDestroy() {
    // Ensure to unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
