import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';


describe('DetailComponent', () => {
  let component: DetailComponent; 
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers:    [ {provide: PeopleService, ActivatedRoute } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('#hide() should toggle sumbitted', () => {
    const peopleService = TestBed.get(PeopleService);
    const activatedRout = TestBed.get(ActivatedRoute);
    const comp = new DetailComponent(peopleService, activatedRout);
    expect(comp.submitted).toBe(false, 'at first');
    comp.hide();
    expect(comp.submitted).toBe(true, 'after first click');
    comp.hide();
    expect(comp.hide).toBe(false, 'after second click');  
  });*/

});
