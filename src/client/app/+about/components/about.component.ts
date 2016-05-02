import {Component} from 'angular2/core';
import {NewComponent} from '../../new/new.component';
import {HomeComponent} from '../../+home/components/home.component';

@Component({
  directives: [HomeComponent, NewComponent],
  selector: 'sd-about',
  templateUrl: 'app/+about/components/about.component.html',
  styleUrls: ['app/+about/components/about.component.css']
})
export class AboutComponent {}
