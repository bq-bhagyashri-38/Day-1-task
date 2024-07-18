import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  getMessage():Observable<string[]>{
    return of(['Hello', 'Hi', 'Hey']);
  }
}
