import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  public persons: string[] = ['Max','Manuel','Anna'];

  constructor() { }

  addPerson(name: string){
    this.persons.push(name);
    console.log(this.persons);
  }
}
