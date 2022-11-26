import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLibComponent } from './comp-lib.component';

describe('CompLibComponent', () => {
  let component: CompLibComponent;
  let fixture: ComponentFixture<CompLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
