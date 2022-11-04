import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleUseComponent } from './module-use.component';

describe('ModuleUseComponent', () => {
  let component: ModuleUseComponent;
  let fixture: ComponentFixture<ModuleUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
