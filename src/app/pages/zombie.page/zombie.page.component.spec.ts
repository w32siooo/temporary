import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zombie.PageComponent } from './zombie.page.component';

describe('Zombie.PageComponent', () => {
  let component: Zombie.PageComponent;
  let fixture: ComponentFixture<Zombie.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zombie.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zombie.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
