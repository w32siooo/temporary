import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player.PageComponent } from './player.page.component';

describe('Player.PageComponent', () => {
  let component: Player.PageComponent;
  let fixture: ComponentFixture<Player.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Player.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Player.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
