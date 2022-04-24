import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnsOfficesPageComponent } from './owns-offices-page.component';

describe('OwnsOfficesPageComponent', () => {
  let component: OwnsOfficesPageComponent;
  let fixture: ComponentFixture<OwnsOfficesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnsOfficesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnsOfficesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
