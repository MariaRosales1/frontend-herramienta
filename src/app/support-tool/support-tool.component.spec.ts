import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportToolComponent } from './support-tool.component';

describe('SupportToolComponent', () => {
  let component: SupportToolComponent;
  let fixture: ComponentFixture<SupportToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
