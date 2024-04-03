import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvionsComponent } from './list-avions.component';

describe('ListAvionsComponent', () => {
  let component: ListAvionsComponent;
  let fixture: ComponentFixture<ListAvionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAvionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAvionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
