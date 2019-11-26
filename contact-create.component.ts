import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ContactModel } from '../model/contact-model';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  constructor(
    private service: ContactService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  model: ContactModel;
  fg: FormGroup;

  ngOnInit() {
  this.model = new ContactModel(0,'','','',null,'','','','',false);
 this.fg = this.fb.group(
{
 contactId: new FormControl(this.model.ContactId),    //extracting each individual values
 firstName: new FormControl(this.model.FirstName),
 middleName: new FormControl(this.model.MiddleName),
 lastName: new FormControl(this.model.Lastname),
 birthDate: new FormControl(this.model.BirthDate),
 emailId: new FormControl(this.model.EmailId),
 mobileNo: new FormControl(this.model.MobileNo),
 workPhone: new FormControl(this.model.WorkPhone),
 homePhone: new FormControl(this.model.HomePhone),
 isActive: new FormControl(this.model.IsActive)
});
}
get f() { return this.fg.controls; }

submit(){
this.model.ContactId = this.f.contactId.value;     //upon clicking update all values will get
this.model.FirstName = this.f.firstName.value;    // updated and redirected to list page
this.model.MiddleName =this.f.middleName.value;
this.model.Lastname = this.f.lastName.value;
this.model.EmailId = this.f.emailId.value;
this.model.BirthDate = this.f.birthDate.value;
this.model.MobileNo = this.f.mobileNo.value;
this.model.WorkPhone = this.f.workPhone.value;
this.model.HomePhone = this.f.homePhone.value;
this.model.IsActive = this.f.isActive.value;

this.service.create(this.model).subscribe(() => {
this.router.navigate(['/contacts/list']);
});
}
}


