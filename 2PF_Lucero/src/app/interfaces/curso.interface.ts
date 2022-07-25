import { Alumno } from './alumno.interface';

export interface Curso {
  id: number;
  name: string;
  description: string;
  alumnos: Alumno[];
}
