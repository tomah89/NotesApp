import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {

  public notes = [];

  constructor() { }

  ngOnInit() {
    this.notes = [
      {
        subject: "Test",
        body: "Test message"
      }
    ]
  }

}
