import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupportToolComponent } from './home-support-tool.component';

describe('HomeSupportToolComponent', () => {
  let component: HomeSupportToolComponent;
  let fixture: ComponentFixture<HomeSupportToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSupportToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSupportToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
