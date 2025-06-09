import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  @Input() questions: any[] = [];
}