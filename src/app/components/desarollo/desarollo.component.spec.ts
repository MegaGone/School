import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarolloComponent } from './desarollo.component';

describe('DesarolloComponent', () => {
  let component: DesarolloComponent;
  let fixture: ComponentFixture<DesarolloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarolloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
