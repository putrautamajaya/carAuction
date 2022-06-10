import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAComponent } from './dropdown-a.component';

describe('DropdownAComponent', () => {
  let component: DropdownAComponent;
  let fixture: ComponentFixture<DropdownAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
