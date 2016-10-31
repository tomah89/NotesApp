import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Output() onSubmitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(newNote){
    this.onSubmitted.emit(newNote);
  }
}
