import {Component} from 'angular2/core';
import {NewComponent} from '../../new/new-component'

@Component({
  directives: [NewComponent],
  providers:[],
  selector: 'empty',
  templateUrl: './empty/components/empty.html',
  styleUrls: './empty/components/empty.css'
});

export class EmptyCmp{

}