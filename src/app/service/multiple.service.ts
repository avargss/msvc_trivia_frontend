import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Multiple {
  private apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';

  constructor(private http: HttpClient) { }

  getMultipleQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}