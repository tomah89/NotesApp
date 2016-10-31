import { Component, OnInit } from '@angular/core';

import { NoteService } from './note.service';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  public notes = [];
  public isAddingNewNote: boolean = false;

  constructor(private noteService: NoteService) { 

  }

  ngOnInit() {
    this.noteService.fetchNotes()
      .subscribe(data => {
        this.notes = data;
      });
  }

  onSubmit(newNote){
    this.notes.push(newNote);
  }

}
