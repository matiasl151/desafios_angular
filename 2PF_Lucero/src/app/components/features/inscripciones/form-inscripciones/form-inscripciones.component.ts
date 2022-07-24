import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-inscripciones',
  templateUrl: './form-inscripciones.component.html',
  styleUrls: ['./form-inscripciones.component.scss'],
})
export class FormInscripcionesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('FormInscripcionesComponent');
  }
}
