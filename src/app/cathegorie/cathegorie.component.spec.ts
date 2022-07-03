import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CathegorieComponent } from './cathegorie.component';

describe('CathegorieComponent', () => {
  let component: CathegorieComponent;
  let fixture: ComponentFixture<CathegorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CathegorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CathegorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
