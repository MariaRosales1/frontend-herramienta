import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSupportToolComponent } from './sidebar-support-tool.component';

describe('SidebarSupportToolComponent', () => {
  let component: SidebarSupportToolComponent;
  let fixture: ComponentFixture<SidebarSupportToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSupportToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSupportToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
