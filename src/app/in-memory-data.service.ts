import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


   createDb() {
    const allPeople = [
     { id: 1, firstName: "Berkant", lastName: "Duman", street: "barbaros", city: "Izmır", state: "Bornova", zip: "ABC" },
      { id: 2, firstName: "Mehmet", lastName: "Duman", street: "barbaros", city: "Izmır", state: "Bornova", zip: "ABC" },
      { id: 3, firstName: "Ali", lastName: "Duman", street: "barbaros", city: "Izmır", state: "Bornova", zip: "ABC" },

    ];


     return { allPeople };
   }

  // Eğer liste boşsa verilecek idyi 1 döndürür .
  // Boş değilse listedeki en büyük id ye 1 ekleyip döndürür

   genId(allPeople: People[]): number {
   return allPeople.length > 0 ? Math.max(...allPeople.map(people => people.id)) + 1 : 1;
   }
}
