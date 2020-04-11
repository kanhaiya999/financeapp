import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatogeriesComponent } from './all-catogeries.component';

describe('AllCatogeriesComponent', () => {
  let component: AllCatogeriesComponent;
  let fixture: ComponentFixture<AllCatogeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCatogeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatogeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
