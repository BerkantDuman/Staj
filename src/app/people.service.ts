import { Injectable } from '@angular/core';
import { People } from './people';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Products } from './products';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' })
};

@Injectable({
  providedIn: 'root'
})


export class PeopleService {


  private allPeopleUrl = 'http://localhost:5000/people';
  private allProductsUrl = 'http://localhost:5000/products';


  constructor(
    private http: HttpClient,
    private messageService: MessageService,

  ) {

  }


  getAllPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.allPeopleUrl);

  }

  deletePerson(id: number): Observable<{}> {
    const url = `${this.allPeopleUrl}/${id}`;
    return this.http.delete(url, httpOptions);

  }


  addPerson(people: People): Observable<People> { //people the data to POST in the body of the request.
    return this.http.post<People>(this.allPeopleUrl, people, httpOptions);

  }

  getPerson(id: number): Observable<People[]> {
    const url = `${this.allPeopleUrl}/${id}`;
    return this.http.get<People[]>(url);
  }


  updatePerson(person: People , id: number): Observable<any> {
    const url = `${this.allPeopleUrl}/${id}`;
    return this.http.put(url, person, httpOptions);

  }

  //FOR PRODUCTS
  getPersonWithProduct(id: number){
    const url = `${this.allProductsUrl}/${id}`;
    return this.http.get<People[]>(url);


  }
  getAllProducts(){
    return this.http.get<Products[]>(this.allProductsUrl);

  }
  // FOR PRODUCTS




  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
  private log(message: string) {
    this.messageService.add(`PeopleService: ${message}`);
  }





}
