import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTableEntryComponent } from './pending-table-entry.component';

describe('PendingTableEntryComponent', () => {
  let component: PendingTableEntryComponent;
  let fixture: ComponentFixture<PendingTableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingTableEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
