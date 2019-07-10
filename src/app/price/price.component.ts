import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  allPeople: People[];
  product_id: number;

  constructor(
    private peopleService: PeopleService,
  ) { }

  ngOnInit() {
  }

  addPerson(firstName: string, lastName: string, street: string, city: string, state: string, zip: string, product_id = this.product_id) {

    const newPerson: People = { firstName, lastName, street, state, city, zip, product_id } as People;
    this.peopleService
      .addPerson(newPerson)
      .subscribe(person => this.allPeople.push(person));

  }

  submitted = false;
  selectedProduct(id: number) {
    this.product_id = id;
    this.submitted = true;
  }
  show() {
    this.submitted = false;
  }

}
