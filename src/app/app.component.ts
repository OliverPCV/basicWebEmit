import {Component, EventEmitter, Output} from '@angular/core';
import {MenuServiceService} from './services/menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'basicWeb';
  search = '';
  block = false;
  rolled = false;

  options: SearchOption[] = [
    {title: 'Home', path: 'home'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'}
  ];

  get filteredOptions(): SearchOption[] {
    const filteredOption = [];
    const search = this.search.toLowerCase();
    for (const option of this.options) {
      if (option.title.toLowerCase().includes(search)) {
        filteredOption.push(option);
      }
    }
    return filteredOption;
  }


  toggleOptions() {
    if (this.block === true) {
      this.block = false;
    } else {
      this.block = true;
    }
  }

  toggleOptionsOff() {
    this.block = false;
  }
  toggleOffSidebar() {
    this.rolled = false;
  }
}


class SearchOption {
  title: string;
  path: string;
}
