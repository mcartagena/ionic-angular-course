import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  personChanged = new Subject<string[]>();
  public persons: string[] = ['Max','Manuel','Anna'];

  constructor() { }

  addPerson(name: string){
    this.persons.push(name);
    this.personChanged.next(this.persons);
  }

  removePerson(name: string){
    this.persons = this.persons.filter(person => {
      return person!=name;
    });
    this.personChanged.next(this.persons);
  }
}
