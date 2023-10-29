import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportJsonComponent } from './export-json.component';

describe('ExportJsonComponent', () => {
  let component: ExportJsonComponent;
  let fixture: ComponentFixture<ExportJsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportJsonComponent]
    });
    fixture = TestBed.createComponent(ExportJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
