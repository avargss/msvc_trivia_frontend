import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOptions } from './multiple-options';

describe('MultipleOptions', () => {
  let component: MultipleOptions;
  let fixture: ComponentFixture<MultipleOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
