import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  public notes = [];
  public isAddingNewNote: boolean = false;

  constructor() { }

  ngOnInit() {
    this.notes = [
      {
        subject: "Test",
        body: "Test message"
      },
      {
        subject: "Second test",
        body: "Second test message"
      },
      {
        subject: "Third test",
        body: "Third test message"
      }
    ]
  }

  onSubmit(newNote){
    this.notes.push(newNote);
  }

}
