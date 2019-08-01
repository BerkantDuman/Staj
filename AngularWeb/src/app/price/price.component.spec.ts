import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PriceComponent } from './price.component';
import { PeopleService } from '../people.service';
import { FormsModule } from '@angular/forms';
import { Products } from '../products';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;
  let mockProducts;
  let mockPeople;
  let peopleService: PeopleService;
  let spy: jasmine.Spy;
  let addPerson: jasmine.Spy
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
    peopleService = fixture.debugElement.injector.get(PeopleService);

    mockProducts = [
      {
        name: "DELL",
        id: 1,
        prices: 700,
        informations: "DELL 15-DB0023NT AMD RYZEN 3 2200U 2.5GHZ-4GB-1TB HDD-15.6-AMD-W10 NOTEBOOK"
      },
      {
        name: "ASUS",
        id: 2,
        prices: 900,
        informations: "ASUS S430FN CORE I7 8565U 1.8GHZ-8GB RAM-256GB SSD-14-MX150 2GB-W10 - NOTEBOOK"
      },
      {
        name: "HP",
        id: 3,
        prices: 799,
        informations: "HP X540LA CORE I3 5005U 2.0GHZ-4GB RAM-500GB HDD-15.6W10 NOTEBOOK"
      }
    ]

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
    ]
    spy = spyOn(peopleService, 'getAllProducts').and.returnValue(of(mockProducts));

    fixture.detectChanges();
  });



  it('#show() should toggle sumbitted', () => {
    const peopleService = TestBed.get(PeopleService);

    const comp = new PriceComponent(peopleService);
    expect(comp.submitted).toBe(false, 'at first');
    comp.show();
    expect(comp.submitted).toBe(true, 'after first click'); 
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

  it('should call getAllProducts from peopleService ', () => {
    component.getAllProducts();
    expect(spy.calls.any()).toBeTruthy();
    expect(component.allProducts.length).toBe(3);
  });

  it('should call addPerson from peopleService ', () => {
    addPerson = spyOn(peopleService, 'addPerson').and.returnValue(of(mockPeople));
    component.addPerson(mockPeople.firstName, mockPeople.lastName, mockPeople.street, mockPeople.city, mockPeople.state, mockPeople.zip, mockPeople.product_id);
    expect(addPerson.calls.any()).toBeTruthy();
 
  });



});


