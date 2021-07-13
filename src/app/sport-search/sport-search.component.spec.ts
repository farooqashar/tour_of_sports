import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSearchComponent } from './sport-search.component';

describe('SportSearchComponent', () => {
  let component: SportSearchComponent;
  let fixture: ComponentFixture<SportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
