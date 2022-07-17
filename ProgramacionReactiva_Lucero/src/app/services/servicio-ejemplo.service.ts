import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Data {
  username: string;
  age: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioEjemploService {

  mock_data: Data[] = [
    {
      username: 'juan',
      age: 20,
      email: ''
    },
    {
      username: 'pedro',
      age: 30,
      email: ''
    },
    {
      username: 'maria',
      age: 40,
      email: ''
    },
    {
      username: 'jose',
      age: 15,
      email: ''
    }
  ]

  mock_data_numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  getData(): Observable<Data[]> {
    return of(this.mock_data);
  }

  getDataNumbers(): Observable<number[]> {
    return of(this.mock_data_numbers);
  }

  getDataPromise(): Promise<Data[]> {
    return new Promise((resolve, reject) => {
      resolve(this.mock_data);
      reject('Error');
    });
  }

}
