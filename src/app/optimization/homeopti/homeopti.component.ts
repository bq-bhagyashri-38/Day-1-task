import { Component } from '@angular/core';

import { RouterLink,RouterOutlet } from '@angular/router';
import { OptimizeParentComponent } from "../ControllingChangeDetection/optimize-parent/optimize-parent.component";
import { OptimizeChildComponent } from "../ControllingChangeDetection/optimize-child/optimize-child.component";
import { TrackByFunctionComponent } from "../track-by-function/track-by-function.component";
import { UnsubscribingObservableComponent } from "../unsubscribing-observable/unsubscribing-observable.component";
import { TreeShakingComponent } from "../tree-shaking/tree-shaking.component"; 

@Component({
  selector: 'app-homeopti',
  standalone: true,
  imports: [RouterLink, RouterOutlet, OptimizeParentComponent, OptimizeChildComponent, TrackByFunctionComponent, UnsubscribingObservableComponent, TreeShakingComponent],
  templateUrl: './homeopti.component.html',
  styleUrl: './homeopti.component.scss'
})
export class HomeoptiComponent {

}
