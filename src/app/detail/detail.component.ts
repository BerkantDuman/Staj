import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() person: any[];
  allPeople: People[];


  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getPersonWithProduct();
  }

  getPersonWithProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPersonWithProduct(id)
      .subscribe(person => this.person = person);
  }



  update(firstName: string, lastName: string, street: string, city: string, state: string, zip: string): void {
    const newPerson: People = { firstName, lastName, street, state, city, zip } as People;
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.updatePerson(newPerson, id)
      .subscribe();
  }

  submitted = false;

  hide() {
    this.submitted = true;
  }
  show() {
    this.submitted = false;
  }
}
