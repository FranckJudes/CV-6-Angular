import { ComponentFixture, TestBed } from '@angular/core/testing';

import { authentificationComponent } from './authentification.component';

describe('authentificationComponent', () => {
  let component: authentificationComponent;
  let fixture: ComponentFixture<authentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ authentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(authentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});