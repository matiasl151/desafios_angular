import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUsuariosComponent } from './details-usuarios.component';

describe('DetailsUsuariosComponent', () => {
  let component: DetailsUsuariosComponent;
  let fixture: ComponentFixture<DetailsUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
