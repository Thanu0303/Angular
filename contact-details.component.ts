import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { ContactModel } from '../model/contact-model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private router: Router,
     private service: ContactService,
     private activeRoute: ActivatedRoute
  ) { }

  model: ContactModel;

  ngOnInit() {
    let selectedId = this.activeRoute.snapshot.params.id;
    this.service.getAllDetails(selectedId).subscribe(data=>this.model=data);
  }
  diagnostic(){
    return JSON.stringify(this.model);
  }
  goBack(){
    this.router.navigate(['/contacts']);
  }
}
