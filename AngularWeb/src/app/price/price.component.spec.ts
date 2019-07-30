import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



import { PriceComponent } from './price.component';
import { PeopleService } from '../people.service';
import { FormsModule } from '@angular/forms';
import { Products } from '../products';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [PriceComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [PeopleService]
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




  it('#SelectedProduct()', () => {
    const peopleService = TestBed.get(PeopleService);
    const testProduct: Products = { id: 1, name: 'A', prices: 500, informations: 'B' };

    const comp = new PriceComponent(peopleService);
    expect(comp.product_id).toBe(0, 'at first');
    comp.selectedProduct(testProduct);
    expect(comp.product_id).toBe(testProduct.id, 'after clicked');
    expect(comp.submitted).toBe(true);


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



    /* it('can test http.get', ()=> {
     const testData: any[] = [{ id: 1, firstName: 'A', lastName: 'B', street: 'C', city: 'D', state: 'E', zip: 'F', product_id: 1, prices: 100, name: 'G', informations: 'H' }];
     const peopleService = TestBed.get(PeopleService);
 
     peopleService.getAllProducts()
     .subscribe(data =>
       // When observable resolves, result should match test data
       expect(data).toEqual(testData)
     );
     const comp = new PriceComponent(peopleService);
     //comp.getAllProducts();
 
     const req = httpTestingController.expectOne('http://localhost:5000/products');
     expect(req.request.method).toEqual('GET');
     req.flush(testData);
     httpTestingController.verify();
 
   });*/
});


