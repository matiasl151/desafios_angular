import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  public option: string = 'lista';
  public option_form: string = '';

  constructor() {}

  ngOnInit(): void {}

  setOptionForm(option: string) {
    this.option_form = option;
  }
  setOption(option: string) {
    this.option = option;
  }
}
