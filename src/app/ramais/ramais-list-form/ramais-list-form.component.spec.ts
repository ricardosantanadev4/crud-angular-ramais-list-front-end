import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaisListFormComponent } from './ramais-list-form.component';

describe('RamaisListFormComponent', () => {
  let component: RamaisListFormComponent;
  let fixture: ComponentFixture<RamaisListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamaisListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamaisListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
