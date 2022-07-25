import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.scss'],
})
export class AddCursosComponent implements OnInit {
  formularioAdd: FormGroup;

  constructor(private fb: FormBuilder, private _cursosService: CursosService) {
    this.formularioAdd = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioAdd.reset();
  }

  addCurso() {
    const curso: Curso = {
      id: this._cursosService.cursos.length + 1,
      name: this.formularioAdd.value.name,
      description: this.formularioAdd.value.description,
      alumnos: [],
    };

    this._cursosService.addCurso(curso);
    this.formularioAdd.reset();
  }
}
