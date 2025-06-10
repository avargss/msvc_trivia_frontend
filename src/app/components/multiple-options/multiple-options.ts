import { Component } from '@angular/core';
import { Multiple } from '../../service/multiple.service';
import { Table } from './table/table';
import { Form } from './form/form';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-multiple-options',
  imports: [Table, Form, NgIf],
  templateUrl: './multiple-options.html',
  styleUrl: './multiple-options.scss'
})
export class MultipleOptions {
  questions: any[] = [];
  showForm = false;
  selectedQuestion: any = null;

  constructor(private multipleService: Multiple) { }

  loadQuestions() {
    this.multipleService.getMultipleQuestions().subscribe(response => {
      this.questions = response.results;
      this.showForm = false;
    });
  }

  loadForm() {
    if (this.questions.length > 0) {
      // Selecciona una pregunta aleatoria para el formulario
      const idx = Math.floor(Math.random() * this.questions.length);
      this.selectedQuestion = this.questions[idx];
      this.showForm = true;
    }
  }

  onQuestionChange(newQuestion: any) {
    this.selectedQuestion = newQuestion;
  }
}