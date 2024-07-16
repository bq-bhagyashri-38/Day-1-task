import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOnChangeComponent } from './components/lifecyclehooks/ng-on-change/ng-on-change.component';
import { LifecycleComponent } from "./components/lifecycle/lifecycle.component";
import { RoutingComponent } from "./task-2-routing/routing/routing.component";
import { RoutingGuardComponent } from "./routingGuard/routing-guard/routing-guard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOnChangeComponent, LifecycleComponent, RoutingComponent, RoutingGuardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dayOneTask';
}
