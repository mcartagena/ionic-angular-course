import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  personsList: string[];
  //private personService: PersonsService;

  constructor(private prsService: PersonsService) {
    //this.personsList = prsService.persons;
    //this.personService = prsService;
   }

  ngOnInit() {
    this.personsList = this.prsService.persons;
  }

}
