import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  personChanged = new Subject<string[]>();
  public persons: string[] = [];

  constructor(private http: HttpClient) { }

  fetchPersons(){
    this.http
    .get<any>('https://swapi.co/api/people')
    .pipe(map(respData => {
      return respData.results.map(character => character.name);
    }))
    .subscribe(transformedData => {
      this.personChanged.next(transformedData);
    })
  }

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
