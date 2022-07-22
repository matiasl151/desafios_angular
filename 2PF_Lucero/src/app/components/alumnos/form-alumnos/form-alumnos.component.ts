import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.scss'],
})
export class FormAlumnosComponent implements OnInit {
  public formularioAdd: FormGroup;
  public formularioEdit: FormGroup;
  public formularioDelete: FormGroup;

  @Input() option: string = 'Add';
  @Output() option_list = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private _alumnosService: AlumnosService
  ) {
    this.formularioAdd = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.formularioEdit = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.formularioDelete = this.fb.group({
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioAdd.reset();
    this.formularioEdit.reset();
    this.formularioDelete.reset();
  }

  addAlumno() {
    const alumno: Alumno = {
      id: this._alumnosService.listAlumnos.length + 1,
      name: this.formularioAdd.value.name,
      lastName: this.formularioAdd.value.lastName,
      age: this.formularioAdd.value.age,
      email: this.formularioAdd.value.email,
    };
    this._alumnosService.addAlumno(alumno);
    console.log(this._alumnosService.getAlumnos());
    this.formularioAdd.reset();
  }

  editAlumno() {
    const alumno = this.formularioEdit.value as Alumno;
    this._alumnosService.updateAlumno(alumno.id, alumno);
    this.formularioEdit.reset();
  }

  deleteAlumno() {
    const id = this.formularioDelete.value.id;
    this._alumnosService.deleteAlumno(id);
    this.formularioDelete.reset();
  }
}
