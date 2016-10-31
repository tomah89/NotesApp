import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  fetchNotes()
  {
    return this.http.get("/assets/notes.json")
    .map(res => res.json());
  }
}
