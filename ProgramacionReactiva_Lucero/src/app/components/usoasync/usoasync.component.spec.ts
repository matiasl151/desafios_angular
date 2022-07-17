import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoasyncComponent } from './usoasync.component';

describe('UsoasyncComponent', () => {
  let component: UsoasyncComponent;
  let fixture: ComponentFixture<UsoasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoasyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
