import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { DisplayNoteComponent } from './display-note/display-note.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NoteComponent
  ],
  declarations: [NoteComponent, DisplayNoteComponent]
})
export class NoteModule { }
