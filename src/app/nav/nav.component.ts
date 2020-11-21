import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'basicWeb';
  search = '';
  block = false;
  rolled = false;

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();


  options: SearchOption[] = [
    {title: 'Home', path: 'home'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'}
  ];

  public toggleMenu() {
    this.toggleSidebar.emit();
  }
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

  ngOnInit(): void {
  }

}

class SearchOption {
  title: string;
  path: string;
}




