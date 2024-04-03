import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionDetailsComponent } from './avion-details.component';

describe('AvionDetailsComponent', () => {
  let component: AvionDetailsComponent;
  let fixture: ComponentFixture<AvionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
