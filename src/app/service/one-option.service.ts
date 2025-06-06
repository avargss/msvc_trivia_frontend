import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneOptionService {

  private apiUrl = 'https://opentdb.com/api.php?amount=10&type=boolean';

  constructor(private http: HttpClient) { }

  getOneOptionQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}