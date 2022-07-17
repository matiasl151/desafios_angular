import { Component, OnDestroy, OnInit } from '@angular/core';
import {map, Subscription} from 'rxjs';
import { Data, ServicioEjemploService } from 'src/app/services/servicio-ejemplo.service';

@Component({
  selector: 'app-usoasync',
  templateUrl: './usoasync.component.html',
  styleUrls: ['./usoasync.component.scss']
})
export class UsoasyncComponent implements OnInit, OnDestroy {

  datos_observable: Data[] = [];
  datos_numbers: number[] = [];
  datos_promise: Data[] = [];

  $promise!: Promise<Data[]>;
  subscribcion!: Subscription;
  subscribcion_numbers!: Subscription;

  constructor(private _service: ServicioEjemploService) { }

  ngOnInit(): void {
    this.$promise = this._service.getDataPromise();
    this.$promise.then(data => {
      this.datos_promise = data;
    }
    );

    this.subscribcion = this._service.getData().subscribe(data => {
      this.datos_observable = data;
    });
    this.subscribcion_numbers = this._service.getDataNumbers().pipe(
      map(data => {
        return data.map(item => item * 2);
      }
    )).subscribe(data => {
      this.datos_numbers = data;
    });
  }

  ngOnDestroy(): void {
    this.subscribcion.unsubscribe();
    this.subscribcion_numbers.unsubscribe();
  }

}
