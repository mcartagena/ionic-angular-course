import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  @Output() personCreate = new EventEmitter<string>();

  enteredPersonName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onCreatePerson(){
    console.log('Created Person: ' + this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
