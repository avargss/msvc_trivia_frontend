import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-table',
  imports: [NgFor],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  @Input() questions: any[] = [];
}
