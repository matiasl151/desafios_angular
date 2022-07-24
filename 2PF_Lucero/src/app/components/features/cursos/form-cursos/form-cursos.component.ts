import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.scss'],
})
export class FormCursosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('FormCursosComponent');
  }
}
