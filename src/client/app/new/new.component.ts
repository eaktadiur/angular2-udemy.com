import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'new-component',
  templateUrl: 'app/new/new.component.html',
  styleUrls: ['app/new/new.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class NewComponent{
  name: string;
  constructor(){
    this.name = "Eaktadiur Rajib";
  }
}