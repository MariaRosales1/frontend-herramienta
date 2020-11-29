import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolNavigationComponent } from './tool-navigation.component';

describe('ToolNavigationComponent', () => {
  let component: ToolNavigationComponent;
  let fixture: ComponentFixture<ToolNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
