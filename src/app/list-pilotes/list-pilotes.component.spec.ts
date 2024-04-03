import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPilotesComponent } from './list-pilotes.component';

describe('ListPilotesComponent', () => {
  let component: ListPilotesComponent;
  let fixture: ComponentFixture<ListPilotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPilotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPilotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
