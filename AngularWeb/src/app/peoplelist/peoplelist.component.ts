import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';
import { PeopleService } from '../people.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';




@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {


  allPeople: People[];


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

  deletePerson(person: People) {

    this.allPeople = this.allPeople.filter(p => p !== person);
    this.peopleService
      .deletePerson(person.id)
      .subscribe();
  }


  /*
  //allPeople: Observable<People[]>
  
  getAllPeople() {
    this.allPeople = this.peopleService.getAllPeople();
  }

  async deletePerson(person: People) {
    this.allPeople = this.allPeople.pipe(map(allPeople => allPeople.filter(p => p !== person)));
    this.peopleService
      .deletePerson(person.id)
      .subscribe();
  
      await this.delay(150);
      this.getAllPeople();
      
  }
    delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  */
}
