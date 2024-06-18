import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefingResultComponent } from './briefing-result.component';

describe('BriefingResultComponent', () => {
  let component: BriefingResultComponent;
  let fixture: ComponentFixture<BriefingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefingResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
