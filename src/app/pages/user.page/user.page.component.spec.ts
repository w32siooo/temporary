import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.PageComponent } from './user.page.component';

describe('User.PageComponent', () => {
  let component: User.PageComponent;
  let fixture: ComponentFixture<User.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
