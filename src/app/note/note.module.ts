import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { DisplayNoteComponent } from './display-note/display-note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NoteService } from './note.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NoteComponent
  ],
  providers: [
    NoteService
  ],
  declarations: [NoteComponent, DisplayNoteComponent, AddNoteComponent]
})
export class NoteModule { }
