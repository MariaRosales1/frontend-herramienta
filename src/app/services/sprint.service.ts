import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Sprint} from '../shared/sprint.model';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  API_URI = 'http://localhost:3000/sprint';
  constructor(private http: HttpClient, private router: Router) { }

  nextSprint() {
    return this.http.get(`${this.API_URI}/nextSprint`);
  }

  createSprint(sprint:Sprint){
    return this.http.post(`${this.API_URI}/creation`, sprint);
  }
}
