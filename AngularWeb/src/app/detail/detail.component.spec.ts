import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { PeopleService } from '../people.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let spy: jasmine.Spy;
  let mockPeople;
  let mockUpdated;
  let update: jasmine.Spy;
  let peopleService: PeopleService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PeopleService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    peopleService = fixture.debugElement.injector.get(PeopleService);

    mockPeople = [
      {
        firstName: "Freud",
        lastName: "Duman",
        street: "a",
        city: "c",
        state: "b",
        zip: "d",
        id: 1,
        product_id: 1,
        name: "DELL",
        prices: 700,
        informations: "DELL 15-DB0023NT AMD RYZEN 3 2200U 2.5GHZ-4GB-1TB HDD-15.6-AMD-W10 NOTEBOOK",
      },
    ]

    mockUpdated = [
      {
        firstName: "BERKANT",
        lastName: "Duman",
        street: "a",
        city: "c",
        state: "b",
        zip: "d",
        id: 1,
        product_id: 1,
        name: "DELL",
        prices: 700,
        informations: "DELL 15-DB0023NT AMD RYZEN 3 2200U 2.5GHZ-4GB-1TB HDD-15.6-AMD-W10 NOTEBOOK",
      },
    ]


    jasmine.getEnv().allowRespy(true); //we can use spy multiple times.
    spy = spyOn(peopleService, 'getPersonWithProduct').and.returnValue(of(mockPeople));
    fixture.detectChanges();

  });



  it('#hide() should toggle sumbitted', () => {

    expect(component.submitted).toBe(false, 'at first');
    component.hide();
    expect(component.submitted).toBe(true, 'after first click');
    component.hide();
    expect(component.submitted).toBe(false, 'after second click');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.getPersonWithProduct();
    expect(component.person).toEqual(mockPeople);
    expect(spy.calls.any()).toBeTruthy();

  })

  it('should call update from peeopleService', ()=> {

    update = spyOn(peopleService, 'updatePerson').and.returnValue(of(mockUpdated))
    component.update(mockUpdated.firstName, mockUpdated.lastName, mockUpdated.street, mockUpdated.city, mockUpdated.state, mockUpdated.zip)
    expect(update.calls.any()).toBeTruthy();

  })

  it('should re-call getProductWithPeople function after update', () => {
    spy = spyOn(peopleService, 'getPersonWithProduct').and.returnValue(of(mockUpdated));
    component.getPersonWithProduct();
    expect(component.person).toEqual(mockUpdated); 
    expect(spy.calls.any()).toBeTruthy();

  })





});
