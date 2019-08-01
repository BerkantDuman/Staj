import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';
import { Products } from '../products';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  allPeople: People[];
  product_id: number = 0;
  allProducts: Products[];
  submitted = false;

  constructor(
    private peopleService: PeopleService,
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  addPerson(firstName: string, lastName: string, street: string, city: string, state: string, zip: string, product_id = this.product_id) {
    if (firstName === "") {
      firstName = "None";
    } else {

      const newPerson: People = { firstName, lastName, street, state, city, zip, product_id } as People;
      this.peopleService.addPerson(newPerson)
        .subscribe(person => this.allPeople.push(person));
    }
  }

  getAllProducts() {
    this.peopleService.getAllProducts()
      .subscribe(allProducts => this.allProducts = allProducts);
  }


  selectedProduct(product: Products) {
    this.product_id = product.id;
    this.submitted = !this.submitted;
  }
  show() {
    this.submitted = !this.submitted;
  }

}
