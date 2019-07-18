import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
  product_id: number;
  allProducts: Products[];

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
      this.peopleService
        .addPerson(newPerson)
        .subscribe(person => this.allPeople.push(person));
    }
  }

  getAllProducts() {
    this.peopleService.getAllProducts()
      .subscribe(allProducts => this.allProducts = allProducts);
  }

  submitted = false;

  selectedProduct(product: Products) {
    this.product_id = product.id;
    this.submitted = true;
  }
  show() {
    this.submitted = false;
  }

}
