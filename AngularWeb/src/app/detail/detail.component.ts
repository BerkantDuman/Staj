import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  person:  any[]
  submitted = false;


  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getPersonWithProduct();
  }

  getPersonWithProduct() {
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


  hide() {
    this.submitted = !this.submitted;
  }
}
