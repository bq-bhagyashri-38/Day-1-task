import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ngondestroy',
  standalone: true,
  imports: [],
  templateUrl: './ngondestroy.component.html',
  styleUrl: './ngondestroy.component.scss'
})
export class NgondestroyComponent implements OnDestroy{
  ngOnDestroy(){
   console.log("i am destroy");
   
  }

}
