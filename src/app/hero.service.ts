import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import{NOTE} from './shared/notelist';
import { Note } from './shared/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getNote(): Observable<Note[]>{
return of(NOTE);
  }
}
