# Desafio2 Lista Lucero

Consigna: Entregar un proyecto que dado un array de alumnos los muestre en forma de lista y aplique diferentes estilos según algunas condiciones 🙌.

Aspectos a incluir en el entregable:

- Se espera la entrega de un proyecto configurado y funcional utilizando creación de componentes.
- Recuerda hacer uso correcto de directivas (estructurales y de atributo) y pipes.

## Lista de alumnos

### alumno.interface.ts

Interface alumno

```
export interface alumno {
  nombre: string;
  apellido: string;
  edad: number;
  curso: string;
  nota: number;
}
```

### mock-Alumnos.ts

Lista de alumnos para el desafio

```
export const ALUMNOS: alumno[] = [
  {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    curso: 'Angular',
    nota: 5
  },
  {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    edad: 25,
    curso: 'Angular',
    nota: 4
  },
  {
    nombre: 'Maria',
    apellido: 'Gonzalez',
    edad: 25,
    curso: 'Angular',
    nota: 3
  },
  {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    curso: 'Angular',
    nota: 5
  },
  {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    edad: 25,
    curso: 'Angular',
    nota: 4
  },
  {
    nombre: 'Maria',
    apellido: 'Gonzalez',
    edad: 25,
    curso: 'Angular',
    nota: 3
  }
];
```
