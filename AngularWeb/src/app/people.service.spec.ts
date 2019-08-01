import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeopleService } from './people.service';
import { People } from './people';
import { Products } from './products';


describe('PeopleService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let peopleService : PeopleService
  beforeEach(() => {
    /* httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
     peopleService = new PeopleService(<any> httpClientSpy);*/
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    peopleService = TestBed.get(PeopleService);
  });

  //#######################################################################################
  it('should be created', () => {
    expect(peopleService).toBeTruthy();
  });
  
  it('can test http.getAllPeople', () => {
    
    const testData: People[] = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    

    peopleService.getAllPeople()
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toBe(testData)
      );

    const req = httpTestingController.expectOne('http://localhost:5000/people');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

  });

  it('can test http.getPersonWithData', () => {
    const testData: any[] = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1, prices: 100, name: 'G', informations: 'H' }];
    

    peopleService.getPersonWithProduct(1)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toBe(testData)
      );

    const req = httpTestingController.expectOne('http://localhost:5000/products/1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

  });

  it('can test http.getPerson', () => {
    const testData: People[] = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    

    peopleService.getPerson(1)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toBe(testData)
      );

    const req = httpTestingController.expectOne('http://localhost:5000/people/1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

  });

  it('can test http.getAllProducts', () => {

    const testData: Products[] =
      [{ id: 1, name: 'Dell', prices: 700, informations: 'PC' }];
    

    peopleService.getAllProducts()
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toBe(testData)
      );

    const req = httpTestingController.expectOne('http://localhost:5000/products');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();

  });




  it('can test http.Update', () => {

    const updatePerson: People = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };
    

    peopleService.updatePerson(updatePerson, 1).subscribe(
      data => expect(data).toBe(updatePerson, 'should return the people')
    );

    const req = httpTestingController.expectOne('http://localhost:5000/people/1');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatePerson);

    const expectedResponse = new HttpResponse(
      {
        status: 200, statusText: 'OK', body: updatePerson
      });

    req.event(expectedResponse);
    httpTestingController.verify();
  });


  it('can test http.addPerson', () => {

    const addPerson: People = { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };
    

    peopleService.addPerson(addPerson).subscribe(
      data => expect(data.firstName).toBe('A', 'should return the people')
    );

    const req = httpTestingController.expectOne('http://localhost:5000/people');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(addPerson);

    const expectedResponse = new HttpResponse(
      {
        status: 200, statusText: 'OK', body: addPerson
      });

    req.event(expectedResponse);
    httpTestingController.verify();
  });


  it('can test http.deletePerson', () => {

    const testData: People[] = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
    

    peopleService.deletePerson(1)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toBe(testData)
      );

    const req = httpTestingController.expectOne('http://localhost:5000/people/1');
    expect(req.request.method).toEqual('DELETE');
    req.flush(testData);
    httpTestingController.verify();

  });
    
  
});
