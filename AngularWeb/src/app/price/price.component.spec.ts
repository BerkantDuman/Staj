import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { PriceComponent } from './price.component';
import { PeopleService } from '../people.service';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#hide() should toggle sumbitted', () => {
    const peopleService = TestBed.get(PeopleService);

    const comp = new PriceComponent(peopleService);
    expect(comp.submitted).toBe(false, 'at first');
    comp.show();
    expect(comp.submitted).toBe(true, 'after first click');
    comp.show();
    expect(comp.submitted).toBe(false, 'after second click');  
  });
});
