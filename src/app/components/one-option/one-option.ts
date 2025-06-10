import { Component } from '@angular/core';
import { OneOptionService } from '../../service/one-option.service';
import { NgFor, NgIf } from '@angular/common';
import { Table } from './table/table';
import { Form } from './form/form';


@Component({
  selector: 'app-one-option',
  imports: [NgIf, Table, Form],
  templateUrl: './one-option.html',
  styleUrl: './one-option.scss'
})
export class OneOption {
  questions: any[] = [];
  showForm = false;
  selectedQuestion: any = null;

  constructor(private oneOptionService: OneOptionService) { }

  // Método para cargar las preguntas
  loadQuestions() {
    this.oneOptionService.getOneOptionQuestions().subscribe(response => {
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
