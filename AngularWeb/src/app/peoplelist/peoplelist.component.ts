import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {

  @Input() allPeople: People[];


  constructor(
    private peopleService: PeopleService,
  ) { }

  ngOnInit() {
    this.getAllPeople();
  }

  getAllPeople() {
    this.peopleService.getAllPeople()
      .subscribe(allPeople => this.allPeople = allPeople);
  }

  delete(person: People): void {
    this.allPeople = this.allPeople.filter(p => p !== person);
    this.peopleService
      .deletePerson(person.id)
      .subscribe();
  }

}
