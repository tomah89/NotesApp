import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { DisplayNoteComponent } from './display-note/display-note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NoteComponent
  ],
  declarations: [NoteComponent, DisplayNoteComponent, AddNoteComponent]
})
export class NoteModule { }
