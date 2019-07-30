import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { PeopleService } from '../people.service';
import { ActivatedRoute, } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { asyncData } from 'src/testing/async-observable-helpers';


describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
 // let httpClient: HttpClient;
 // let httpTestingController: HttpTestingController;

  let peopleService: PeopleService;  
  let activetedRoute: ActivatedRoute;
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
    fixture.detectChanges();
    
  //  httpClient = TestBed.get(HttpClient);
  // httpTestingController = TestBed.get(HttpTestingController);

    peopleService = TestBed.get(PeopleService);
    activetedRoute = TestBed.get(ActivatedRoute);
  });

  it('#hide() should toggle sumbitted', () => {
    
    const comp = new DetailComponent(peopleService, activetedRoute);
    expect(comp.submitted).toBe(false, 'at first');
    comp.hide();
    expect(comp.submitted).toBe(true, 'after first click');
    comp.hide();
    expect(comp.submitted).toBe(false, 'after second click');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // Bu fonksiyon peopele.service.spec.ts de çalışırken burada çalışmıyor
  /* it('should update a people and return it', () => {
 
     const updatePerson: People[] = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 }];
     const peopleService = TestBed.get(PeopleService);
 
     peopleService.updatePerson(updatePerson, 1).subscribe(
       data => expect(data).toEqual(updatePerson, 'should return the people')
     );
 
     const req = httpTestingController.expectOne('http://localhost:5000/people/1'); => burda 1  yazınca 0 , 0 yazınca 1 algılıyor ?
     expect(req.request.method).toEqual('PUT');
     expect(req.request.body).toEqual(updatePerson);
 
     req.flush(updatePerson);
     httpTestingController.verify();
   });*/

  /*it('should return expected people (HttpClient called once)', () => {
    const activetedRoute = TestBed.get(ActivatedRoute);
    const comp = new DetailComponent(peopleService, activetedRoute);

    const expectedPeople: any[] = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1, prices: 100, name: 'G', informations: 'H' }];
    httpClientSpy.get.and.returnValue(asyncData(expectedPeople));

    /*peopleService.getPersonWithProduct(1)
      .subscribe(person =>
        expect(person).toEqual(expectedPeople)
      );
      comp.getPersonWithProduct();

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });*/




  /*  it('should return expected people update (HttpClient called once)', () => {
     const activetedRoute = TestBed.get(ActivatedRoute);
     const comp = new DetailComponent(peopleService, activetedRoute);
     
      const expectedPeople: People =
        { id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1 };
      httpClientSpy.get.and.returnValue(asyncData(expectedPeople));
      
      comp.update(expectedPeople.firstName,expectedPeople.firstName,expectedPeople.firstName,expectedPeople.firstName,expectedPeople.firstName, 1)
      
  
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });*/

  /* it('can test http.get', ()=> {
  const testData: any[] =  [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1, prices: 100, name:'G', informations:'H' }];
  const peopleService = TestBed.get(PeopleService);
 
  peopleService.getPersonWithProduct(1)
  .subscribe(data =>
    // When observable resolves, result should match test data
    expect(data).toEqual(testData)
  );
 
  const req = httpTestingController.expectOne('http://localhost:5000/products/1');
  expect(req.request.method).toEqual('GET');
  req.flush(testData);
  httpTestingController.verify();
 
});*/




});
