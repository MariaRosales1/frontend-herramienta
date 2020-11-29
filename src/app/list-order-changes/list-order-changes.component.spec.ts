import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderChangesComponent } from './list-order-changes.component';

describe('ListOrderChangesComponent', () => {
  let component: ListOrderChangesComponent;
  let fixture: ComponentFixture<ListOrderChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
