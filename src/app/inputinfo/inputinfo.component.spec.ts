import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputinfoComponent } from './inputinfo.component';

describe('InputinfoComponent', () => {
  let component: InputinfoComponent;
  let fixture: ComponentFixture<InputinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
