import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaisLisTableComponent } from './ramais-list.component';

describe('RamaisLisTableComponent', () => {
  let component: RamaisLisTableComponent;
  let fixture: ComponentFixture<RamaisLisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamaisLisTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamaisLisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
