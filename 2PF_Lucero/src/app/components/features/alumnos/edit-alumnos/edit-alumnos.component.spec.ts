import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlumnosComponent } from './edit-alumnos.component';

describe('EditAlumnosComponent', () => {
  let component: EditAlumnosComponent;
  let fixture: ComponentFixture<EditAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
