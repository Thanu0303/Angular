import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login-model';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
  loginModel:LoginModel;
  loginForm: FormGroup;

  constructor(
    private authservice:AuthenticationService,
    private router: Router,
    private activeRoute: ActivatedRoute
   )
   {
    this.loginModel = new LoginModel('','');
   }

  ngOnInit() {
    this.loginForm= new FormGroup({
      UserName: new FormControl(this.loginModel.UserName),
      Password: new FormControl(this.loginModel.Password)
    });
  }submitted=false;
  //define a getter property
  get f() { return this.loginForm.controls; }

submit(){
  this.submitted= true;
  this.loginModel.UserName= this.f.UserName.value;
  this.loginModel.Password=this.f.Password.value;
  if(this.authservice.login(this.loginModel)) {
  let redirectUrl = this.activeRoute.snapshot.queryParams['returnUrl'] ||"/contacts";
  this.router.navigate([redirectUrl]);
}
}
}
