import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {

  personsList: string[];
  isFeching = false;
  //private personService: PersonsService;
  private personListSubs: Subscription;

  constructor(private prsService: PersonsService) {
    //this.personsList = prsService.persons;
    //this.personService = prsService;
   }

  ngOnInit() {
    this.personListSubs = this.prsService.personChanged.subscribe(persons => {
      this.personsList = persons;
      this.isFeching = false;
    });
    this.isFeching = true;
    this.prsService.fetchPersons();
  }

  ngOnDestroy(){
    this.personListSubs.unsubscribe();
  }

  onRemovePerson(name: string){
    this.prsService.removePerson(name);
  }
}
