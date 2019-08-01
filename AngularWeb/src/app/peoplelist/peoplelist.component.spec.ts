import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplelistComponent } from './peoplelist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PeopleService } from '../people.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub } from '../../testing/router-link-directive-stub';
import { of } from 'rxjs';






describe('PeoplelistComponent', () => {
  let component: PeoplelistComponent;
  let fixture: ComponentFixture<PeoplelistComponent>;
  let spy: jasmine.Spy;
  let spyDelete: jasmine.Spy;
  let mock;
  let mockDeleted;
  let peopleService: PeopleService;
  let mockPeople;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PeoplelistComponent,
        RouterLinkDirectiveStub

      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PeopleService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplelistComponent);
    component = fixture.componentInstance;
    peopleService = fixture.debugElement.injector.get(PeopleService)
    mockPeople = [
      {
        firstName: "Freud",
        lastName: "Duman",
        street: "a",
        city: "c",
        state: "b",
        zip: "d",
        id: 1,
        product_id: 1
      },
      {
        firstName: "Parker",
        lastName: "Lowstreet 4",
        street: "b",
        city: "d",
        state: "c",
        zip: "a",
        id: 2,
        product_id: 3
      },
      {
        firstName: "Amy",
        lastName: "Apple st 652",
        street: "b",
        city: "c",
        state: "d",
        zip: "a",
        id: 3,
        product_id: 1
      },
      {
        firstName: "Freud",
        lastName: "Duman",
        street: "a",
        city: "c",
        state: "b",
        zip: "d",
        id: 4,
        product_id: 1
      },
      {
        firstName: "Parker",
        lastName: "Lowstreet 4",
        street: "b",
        city: "d",
        state: "c",
        zip: "a",
        id: 5,
        product_id: 3
      },
      {
        firstName: "Amy",
        lastName: "Apple st 652",
        street: "b",
        city: "c",
        state: "d",
        zip: "a",
        id: 6,
        product_id: 1
      },
    ]
    mock =

      {
        firstName: "Parker",
        lastName: "Lowstreet 4",
        street: "b",
        city: "d",
        state: "c",
        zip: "a",
        id: 2,
        product_id: 3
      },


      mockDeleted = [
        {
          firstName: "Freud",
          lastName: "Duman",
          street: "a",
          city: "c",
          state: "b",
          zip: "d",
          id: 1,
          product_id: 1
        },
        {
          firstName: "Amy",
          lastName: "Apple st 652",
          street: "b",
          city: "c",
          state: "d",
          zip: "a",
          id: 3,
          product_id: 1
        },
        {
          firstName: "Freud",
          lastName: "Duman",
          street: "a",
          city: "c",
          state: "b",
          zip: "d",
          id: 4,
          product_id: 1
        },
        {
          firstName: "Parker",
          lastName: "Lowstreet 4",
          street: "b",
          city: "d",
          state: "c",
          zip: "a",
          id: 5,
          product_id: 3
        },
        {
          firstName: "Amy",
          lastName: "Apple st 652",
          street: "b",
          city: "c",
          state: "d",
          zip: "a",
          id: 6,
          product_id: 1
        },
      ]


    jasmine.getEnv().allowRespy(true); //we can use spy multiple times.
    spy = spyOn(peopleService, 'getAllPeople').and.returnValues(of(mockPeople ));
    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();
    expect(spy.calls.any()).toBeTruthy();
    expect(component.allPeople.length).toBe(6);

  });


  it('should call deletePerson from peopleService ', () => {
    spyDelete = spyOn(peopleService, 'deletePerson').and.returnValue(of(true))
    component.deletePerson(mock);
    expect(spyDelete.calls.any()).toBeTruthy();


  });

    it('should call getAllPeople from peopleService after delete', () => {
      spy = spyOn(peopleService, 'getAllPeople').and.returnValues(of(mockDeleted));
      component.getAllPeople()
      expect(spy.calls.any()).toBeTruthy();
      expect(component.allPeople.length).toBe(5);
  
   
    });



});
