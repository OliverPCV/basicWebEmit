import {Component, EventEmitter, Output} from '@angular/core';
import {MenuServiceService} from './services/menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicWeb';
  rolled = false;
}



