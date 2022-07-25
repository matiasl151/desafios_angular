import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-edit-cursos',
  templateUrl: './edit-cursos.component.html',
  styleUrls: ['./edit-cursos.component.scss'],
})
export class EditCursosComponent implements OnInit {
  public formularioEdit: FormGroup;
  subscription!: Subscription;
  curso!: Curso;
  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _cursosService: CursosService
  ) {
    this.formularioEdit = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.curso = this._cursosService.getCurso(+params.get('id')!);
      this.formularioEdit.setValue({
        name: this.curso.name,
        description: this.curso.description,
      });
    });
  }

  editCurso() {
    const curso = this.formularioEdit.value as Curso;
    this._cursosService.updateCurso(this.curso.id, curso);
  }
}
