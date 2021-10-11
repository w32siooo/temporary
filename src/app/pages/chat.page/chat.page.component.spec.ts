import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat.PageComponent } from './chat.page.component';

describe('Chat.PageComponent', () => {
  let component: Chat.PageComponent;
  let fixture: ComponentFixture<Chat.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chat.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chat.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
