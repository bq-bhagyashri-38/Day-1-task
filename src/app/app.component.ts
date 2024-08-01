import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOnChangeComponent } from './components/lifecyclehooks/ng-on-change/ng-on-change.component';
import { LifecycleComponent } from "./components/lifecycle/lifecycle.component";
import { RoutingComponent } from "./task-2-routing/routing/routing.component";
import { RoutingGuardComponent } from "./routingGuard/routing-guard/routing-guard.component";
import { HomeoptiComponent } from "./optimization/homeopti/homeopti.component";
import { GitLearnComponent } from "./githubLearning/git-learn/git-learn.component";
import { TestingBranchesComponent } from "./githubLearning/testing-branches/testing-branches.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOnChangeComponent, LifecycleComponent, RoutingComponent, RoutingGuardComponent, HomeoptiComponent, GitLearnComponent, TestingBranchesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dayOneTask';
}
