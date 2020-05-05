import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDbComponent } from './movies-db.component';

describe('MoviesDbComponent', () => {
  let component: MoviesDbComponent;
  let fixture: ComponentFixture<MoviesDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
