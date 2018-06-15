import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationModuleComponent } from './pagination-module.component';

describe('PaginationModuleComponent', () => {
  let component: PaginationModuleComponent;
  let fixture: ComponentFixture<PaginationModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
