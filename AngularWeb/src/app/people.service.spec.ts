import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeopleService } from './people.service';
import { Observable, of } from 'rxjs';
import { People } from './people';
import { Products } from './products';
import { asyncData, asyncError } from '../../src/testing/async-observable-helpers';





describe('PeopleService', () => {

  let httpClient: HttpClient;
  let httpTestingController : HttpTestingController;
  beforeEach(() => {
   /* httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    peopleService = new PeopleService(<any> httpClientSpy);*/
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService]
      });

      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);

  });

  //#######################################################################################

  it('can test http.get', ()=> {
    const testData: People[] =  [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    const peopleService = TestBed.get(PeopleService);

    peopleService.getAllPeople()
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne('http://localhost:5000/people');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

  });

  it('can test http.get', ()=> {
    const testData: People[] =  [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    const peopleService = TestBed.get(PeopleService);

    peopleService.getPerson(1)
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne('http://localhost:5000/people/1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

  });

  it('can test http.get', ()=> {
    
    const testData: Products[] =
      [{ id: 1, name: 'Dell', prices: 700, informations: 'PC' }];
    const peopleService = TestBed.get(PeopleService);

    peopleService.getAllProducts()
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne('http://localhost:5000/products');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

  });


  

  it('should update a people and return it', () => {

    const updatePerson: People[]= [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    const peopleService = TestBed.get(PeopleService);
    
    peopleService.updatePerson(updatePerson, 1).subscribe(
      data => expect(data).toEqual(updatePerson, 'should return the people')
    );

    const req = httpTestingController.expectOne('http://localhost:5000/people/1');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatePerson);

    req.flush(updatePerson);
    httpTestingController.verify();
  });


  it('should update a people and return it', () => {

    const addPerson: People= { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };
    const peopleService = TestBed.get(PeopleService);
    
    peopleService.addPerson(addPerson).subscribe(
      data => expect(data).toEqual(addPerson, 'should return the people')
    );

    const req = httpTestingController.expectOne('http://localhost:5000/people');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(addPerson);

    req.flush(addPerson);
    httpTestingController.verify();
  });


  it('can test http.get', ()=> {
    
    const testData: People[]= [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    const peopleService = TestBed.get(PeopleService);

    peopleService.deletePerson(1)
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    const req = httpTestingController.expectOne('http://localhost:5000/people/1');
    expect(req.request.method).toEqual('DELETE');
    req.flush(testData);
    httpTestingController.verify();

  });







  //getAllPeople
 /* it('should return expected people (HttpClient called once)', () => {

    const expectedPeople: People[] =
      [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    httpClientSpy.get.and.returnValue(asyncData(expectedPeople));

    peopleService.getAllPeople().subscribe(
      peoplees => expect(peoplees).toEqual(expectedPeople, 'expected people'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  //#######################################################################################

  //getAllProducts
  it('should return expected products (HttpClient called once)', () => {

    const expectedProducts: Products[] =
      [{ id: 1, name: 'Dell', prices: 700, informations: 'PC' }];
    
    httpClientSpy.get.and.returnValue(asyncData(expectedProducts));

    peopleService.getAllProducts().subscribe(
      products => expect(products).toEqual(expectedProducts, 'expected products'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  //#######################################################################################

  
    //getPersons
    it('should return expected people (HttpClient called once)', () => {
      
      const expectedPeople: People[] =
        [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 },];
  
      httpClientSpy.get.and.returnValue(asyncData(expectedPeople));
  
      peopleService.getPerson(1).subscribe(
        people => expect(people).toEqual(expectedPeople, 'expected people'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
  
  
  //####################  ###################################################################
  


  //#######################################################################################
/*
  it('should update a hero and return it', () => {

    const httpTestingController = TestBed.get(HttpTestingController);

    const updatePerson: People = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };
    const http = TestBed.get(HttpTestingController);  

    httpClientSpy.get.and.returnValue(asyncData("Updated new person"));

    peopleService.updatePerson(updatePerson, 1).subscribe(
      data => expect(data).toEqual(updatePerson, 'should return the hero'),
      fail
    );

    // HeroService should have made one request to PUT hero
    const req = http.expectOne(peopleService.allPeopleUrl + "/" + 1);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatePerson);

    // Expect server to return the hero after PUT
    const expectedResponse = new HttpResponse(
      { status: 200, statusText: 'OK', body: updatePerson });
    req.event(expectedResponse);
  });
/*
  it('should add a hero ', () => {
    const httpTestingController = TestBed.get(HttpTestingController);

    const addPerson: People = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    const peopleService = TestBed.get(PeopleService);

    peopleService.addPerson(addPerson).subscribe(
      data => expect(data).toEqual(addPerson, 'should return the person'),
      fail
    );
    httpClientSpy.get.and.returnValue(asyncData(addPerson));
    const req = httpTestingController.expectOne(peopleService.allPeopleUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(addPerson);

    const expectedResponse = new HttpResponse(
      { status: 200, statusText: 'OK', body: addPerson });
    req.event(expectedResponse);


  });

  /*
  //getAllPeople
  it('Testing getAllPeople() and expect a list asyncData people', () => {
    const peopleService = TestBed.get(PeopleService);
    const http = TestBed.get(HttpTestingController);
    const expected = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];

    peopleService.getAllPeople().subscribe(actual => {
      expect(actual).toBe(expected);
    });

    http.expectOne('http://localhost:5000/people').flush(expected);
  });

  //getPerson
  it('Testing getPerson() and expect a person from people', () => {
    const peopleService = TestBed.get(PeopleService);
    const http = TestBed.get(HttpTestingController);
    const expected = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    const id = expected[0].id;
    let actual = [];

    peopleService.getPerson(id).subscribe(actual => {
      expect(actual).toEqual(expected);
    });

    http.expectOne('http://localhost:5000/people/' + id).flush(expected);
  });

  //deletePerson()
  it('Testing deletePerson()', () => {
    const peopleService = TestBed.get(PeopleService);
    const http = TestBed.get(HttpTestingController);
    const deleted = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];

    const expected = 'deleted';

    peopleService.deletePerson(1).subscribe(actual => {
      expect(actual).toBe(expected);
    });

    http.expectOne('http://localhost:5000/people/1').flush(expected);
  });

  //addPerson()
  it('Testing addPerson()', () => {
    const peopleService = TestBed.get(PeopleService);
    const http = TestBed.get(HttpTestingController);
    const added = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };

    const expected = 'Added new person';

    peopleService.addPerson(added).subscribe(actual => {
      expect(actual).toBe(expected);
    });
    http.expectOne('http://localhost:5000/people').flush(expected);
  });

  //updatePerson
  it('Testing updatePerson()', () => {
    const peopleService = TestBed.get(PeopleService);
    const http = TestBed.get(HttpTestingController);
    const added = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };

    const expected = 'Updated new person';
    const id = added.id;

    peopleService.updatePerson(added, id).subscribe(actual => {
      expect(actual).toBe(expected);
    });

    http.expectOne('http://localhost:5000/people/' + id).flush(expected);
  });
*/



});
