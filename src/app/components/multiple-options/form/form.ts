import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form implements OnChanges {
  @Input() question: any = null;
  @Input() questions: any[] = [];
  @Output() questionChange = new EventEmitter<any>();

  allAnswers: string[] = [];
  selectedAnswer: string = '';
  result: boolean = false;
  isCorrect: boolean = false;

  ngOnChanges() {
    if (this.question) {
      this.prepareAnswers();
      this.selectedAnswer = '';
      this.result = false;
    }
  }

  prepareAnswers() {
    this.allAnswers = [...this.question.incorrect_answers, this.question.correct_answer]
      .sort(() => Math.random() - 0.5);
  }

  checkAnswer() {
    this.result = true;
    this.isCorrect = this.selectedAnswer === this.question.correct_answer;
  }

  nextQuestion() {
    if (this.questions && this.questions.length > 0) {
      let idx = Math.floor(Math.random() * this.questions.length);
      this.questionChange.emit(this.questions[idx]);
    }
  }
}