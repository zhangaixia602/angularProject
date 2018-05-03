import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMComponent } from './heroes-m.component';

describe('HeroesMComponent', () => {
  let component: HeroesMComponent;
  let fixture: ComponentFixture<HeroesMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
