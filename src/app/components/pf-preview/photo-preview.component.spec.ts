import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfPreviewComponent } from './pf-preview.component';

describe('PfPreviewComponent', () => {
  let component: PfPreviewComponent;
  let fixture: ComponentFixture<PfPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
