import { Component, OnInit } from '@angular/core';
//import{Note} from '../shared/data';
import{NOTE} from '../shared/notelist';
import { Note } from '../shared/data';
import{HeroService} from '../hero.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

selectedNote:Note;
notes:Note[];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
   this.getHeroes();
  }
  onSelect(n:Note) : void{
this.selectedNote=n;
  }
  
  getHeroes(): void {
    this.heroService.getNote()
        .subscribe(note => this.notes = note);
  }

}
