import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSecurityComponent } from './module-security.component';

describe('ModuleSecurityComponent', () => {
  let component: ModuleSecurityComponent;
  let fixture: ComponentFixture<ModuleSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
