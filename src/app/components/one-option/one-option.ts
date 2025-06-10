import { Component } from '@angular/core';
import { OneOptionService } from '../../service/one-option.service';
import { NgFor, NgIf } from '@angular/common';
import { Table } from './table/table';


@Component({
  selector: 'app-one-option',
  imports: [NgIf, Table],
  templateUrl: './one-option.html',
  styleUrl: './one-option.scss'
})
export class OneOption {
  
  questions: any[] = [];

  constructor(private oneOptionService: OneOptionService) { }
  
  // Método para cargar las preguntas
  loadQuestions() {
    this.oneOptionService.getOneOptionQuestions().subscribe(response => {
      this.questions = response.results;
      console.log(this.questions);
    });
  }
}
