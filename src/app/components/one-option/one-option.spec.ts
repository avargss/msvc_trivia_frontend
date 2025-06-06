import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOption } from './one-option';

describe('OneOption', () => {
  let component: OneOption;
  let fixture: ComponentFixture<OneOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneOption]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
