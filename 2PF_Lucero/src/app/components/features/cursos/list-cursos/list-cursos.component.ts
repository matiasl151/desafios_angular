import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss'],
})
export class ListCursosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('ListCursosComponent');
  }
}
