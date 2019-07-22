import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeopleService } from './people.service';
import { Observable, of } from 'rxjs';
import { People } from './people';


describe('PeopleService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let peopleService: PeopleService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    peopleService = new PeopleService(<any>httpClientSpy);
  });

  //getAllPeople
  it('should return expected people (HttpClient called once)', () => {
    const expectedPeople: People[] =
      [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];

    httpClientSpy.get.and.returnValue(of(expectedPeople));

    peopleService.getAllPeople().subscribe(
      people => expect(people).toEqual(expectedPeople, 'expected people'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  //getPersons
  it('should return expected people (HttpClient called once)', () => {
    const expectedPeople: People[] =
      [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 },];

    httpClientSpy.get.and.returnValue(of(expectedPeople));

    peopleService.getPerson(1).subscribe(
      people => expect(people).toEqual(expectedPeople, 'expected people'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should update a person and return it', () => {

    let httpTestingController: HttpTestingController;
    let allPeopleUrl = 'http://localhost:5000/people';
    const makeUrl = (id: number) => `${allPeopleUrl}/?id=${id}`;
    const updatePerson: People = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };
  

    peopleService.updatePerson(updatePerson, 1).subscribe(
      data => expect(data).toEqual(updatePerson, 'should return the person'),
      fail
    );

    const req = httpTestingController.expectOne(allPeopleUrl);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatePerson);

  });

/*
  // Expecting the query form of URL so should not 404 when id not found
  const makeUrl = (id: number) => `${allPeopleUrl}/?id=${id}`;

  it('should update a person and return it', () => {

    const updatePerson: People = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };

    peopleService.updatePerson(updatePerson, 1).subscribe(
      data => expect(data).toEqual(updatePerson, 'should return the person'),
      fail
    );

    // HeroService should have made one request to PUT hero
    const req = httpTestingController.expectOne(allPeopleUrl);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatePerson);

    // Expect server to return the hero after PUT
    const expectedResponse = new HttpResponse(
      { status: 200, statusText: 'OK', body: updatePerson });
    req.event(expectedResponse);
  });*/

});
