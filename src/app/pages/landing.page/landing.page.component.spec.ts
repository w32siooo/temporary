import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing.PageComponent } from './landing.page.component';

describe('Landing.PageComponent', () => {
  let component: Landing.PageComponent;
  let fixture: ComponentFixture<Landing.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Landing.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Landing.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
