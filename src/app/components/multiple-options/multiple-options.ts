import { Component } from '@angular/core';
import { Multiple } from '../../service/multiple.service';
import { NgFor, NgIf } from '@angular/common';
import { Table } from './table/table';

@Component({
  selector: 'app-multiple-options',
  imports: [NgIf, Table],
  templateUrl: './multiple-options.html',
  styleUrl: './multiple-options.scss'
})
export class MultipleOptions {
  questions: any[] = [];

  constructor(private multipleService: Multiple) { }

  loadQuestions() {
    this.multipleService.getMultipleQuestions().subscribe(response => {
      this.questions = response.results;
    });
  }
}