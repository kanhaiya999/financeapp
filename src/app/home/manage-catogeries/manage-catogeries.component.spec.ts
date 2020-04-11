import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatogeriesComponent } from './manage-catogeries.component';

describe('ManageCatogeriesComponent', () => {
  let component: ManageCatogeriesComponent;
  let fixture: ComponentFixture<ManageCatogeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCatogeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCatogeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
