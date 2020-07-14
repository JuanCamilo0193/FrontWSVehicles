import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassVehiclesComponent } from './class-vehicles.component';

describe('ClassVehiclesComponent', () => {
  let component: ClassVehiclesComponent;
  let fixture: ComponentFixture<ClassVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
