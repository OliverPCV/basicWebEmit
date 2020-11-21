import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  name = '';
  lastname = '';
  subject = '';




  submit(name: string, lastname: string, subject: string) {
    console.log(name);
    console.log(lastname);
    console.log(subject);


  }
  ngOnInit() {
  }

}
