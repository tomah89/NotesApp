import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Output() onSubmitted: EventEmitter<any> = new EventEmitter();
  @Output() onCancelled: EventEmitter<any> = new EventEmitter();
  addNoteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
    
  ngOnInit() {
    this.addNoteForm = this.formBuilder.group({
      subject: ['', Validators.required],
      body:  ['', Validators.required]
    });
  }

  onSubmit(newNote){
    this.onSubmitted.emit(newNote);
  }

  onCancel(){
    this.onCancelled.emit();
  }
}
