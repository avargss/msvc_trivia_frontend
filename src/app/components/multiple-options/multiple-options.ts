import { Component } from '@angular/core';
import { Multiple } from '../../service/multiple.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-multiple-options',
  imports: [NgIf, NgFor],
  templateUrl: './multiple-options.html',
  styleUrl: './multiple-options.scss'
})
export class MultipleOptions {
  questions: any[] = [];

  constructor(private multipleService: Multiple) { }

  // Método para cargar las preguntas
  loadQuestions() {
    this.multipleService.getMultipleQuestions().subscribe(response => {
      this.questions = response.results;
      console.log(this.questions);
    });
  }
}