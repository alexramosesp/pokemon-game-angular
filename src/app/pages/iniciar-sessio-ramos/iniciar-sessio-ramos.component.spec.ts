import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioRamosComponent } from './iniciar-sessio-ramos.component';

describe('IniciarSessioRamosComponent', () => {
  let component: IniciarSessioRamosComponent;
  let fixture: ComponentFixture<IniciarSessioRamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioRamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioRamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
