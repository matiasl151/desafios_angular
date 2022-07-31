import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-alumnos',
  templateUrl: './edit-alumnos.component.html',
  styleUrls: ['./edit-alumnos.component.scss'],
})
export class EditAlumnosComponent implements OnInit, OnDestroy {
  alumno!: Alumno;
  id: number = 0;
  subscription!: Subscription;
  public formularioEdit: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _alumnosService: AlumnosService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.formularioEdit = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this._alumnosService.getAlumno(this.id).subscribe((alumno: Alumno) => {
      this.alumno = alumno;
      this.formularioEdit.setValue({
        name: this.alumno.name,
        lastName: this.alumno.lastName,
        age: this.alumno.age,
        email: this.alumno.email,
      });
    });
  }

  editAlumno() {
    const alumno = this.formularioEdit.value as Alumno;
    this._alumnosService.updateAlumno(this.id, alumno).subscribe(() => {
      this._alumnosService.getAlumno(this.id).subscribe((alumno: Alumno) => {
        this.alumno = alumno;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
