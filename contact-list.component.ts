import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactModel } from '../model/contact-model';
import { Router } from '@angular/router';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

   contactList: ContactModel[]= [];

  constructor(
    private router: Router,
    private service:ContactService
  ) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.contactList = data);

  }
  goBack(){
    this.router.navigate(['/contacts']);
  }
}
