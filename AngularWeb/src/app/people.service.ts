import { Injectable } from '@angular/core';
import { People } from './people';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from './products';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' })
};

@Injectable({
  providedIn: 'root'
})


export class PeopleService {


  public allPeopleUrl = 'http://localhost:5000/people';
  private allProductsUrl = 'http://localhost:5000/products';


  constructor(private http: HttpClient) { }


  getAllPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.allPeopleUrl);

  }

  deletePerson(id: number): Observable<{}> {
    const url = `${this.allPeopleUrl}/${id}`;
    return this.http.delete<People>(url, httpOptions);

  }


  addPerson(people: People): Observable<People> { //people the data to POST in the body of the request.
    return this.http.post<People>(this.allPeopleUrl, people, httpOptions);

  }

  getPerson(id: number): Observable<People[]> {
    const url = `${this.allPeopleUrl}/${id}`;
    return this.http.get<People[]>(url);
  }


  updatePerson(person: People, id: number): Observable<any> {
    const url = `${this.allPeopleUrl}/${id}`;
    return this.http.put<People>(url, person, httpOptions);

  }

  //FOR PRODUCTS
  getPersonWithProduct(id: number): Observable<any[]> {
    const url = `${this.allProductsUrl}/${id}`;
    return this.http.get<any[]>(url);


  }
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.allProductsUrl);

  }

}
