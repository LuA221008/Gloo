import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleMantenimientoComponent } from './module-mantenimiento.component';

describe('ModuleMantenimientoComponent', () => {
  let component: ModuleMantenimientoComponent;
  let fixture: ComponentFixture<ModuleMantenimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleMantenimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
