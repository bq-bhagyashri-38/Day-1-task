import { Component, ViewChild } from '@angular/core';
import { OptimizeChildComponent } from "../optimize-child/optimize-child.component";
import { PurePipeCodePipe } from "../../pure-pipe-code.pipe";
import { Observable } from 'rxjs';
import { MessageServiceService } from '../../message-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-optimize-parent',
  standalone: true,
  imports: [OptimizeChildComponent, PurePipeCodePipe,CommonModule],
  templateUrl: './optimize-parent.component.html',
  styleUrl: './optimize-parent.component.scss'
})
export class OptimizeParentComponent {
  // message: string = 'Bhagyashri';
 
  mes$!: Observable<string[]>;

  constructor(private messageService: MessageServiceService) {}

  ngOnInit() {
    this.mes$ = this.messageService.getMessage();
  }
  
}
