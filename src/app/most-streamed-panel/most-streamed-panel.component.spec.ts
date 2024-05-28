import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostStreamedPanelComponent } from './most-streamed-panel.component';

describe('MostStreamedPanelComponent', () => {
  let component: MostStreamedPanelComponent;
  let fixture: ComponentFixture<MostStreamedPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostStreamedPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostStreamedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
