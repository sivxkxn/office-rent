import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultPageComponent } from './no-result-page.component';

describe('NoResultPageComponent', () => {
  let component: NoResultPageComponent;
  let fixture: ComponentFixture<NoResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
