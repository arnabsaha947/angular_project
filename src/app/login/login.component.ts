import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router, Routes } from '@angular/router';
DataserviceService

Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform:FormGroup;
email:AbstractControl; //any variable name
pwd:AbstractControl;

  constructor(private formbuilder:FormBuilder,private dataservice:DataserviceService,private router:Router) {

    this.loginform=formbuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pwd: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });

    this.email=this.loginform.controls['email'];// right hand side is from formControlName of html
    this.pwd=this.loginform.controls['pwd'];

   }

  ngOnInit() {
  }

  login()
  {
    if(this.loginform.value.email && this.loginform.value.pwd){

    console.log("this is login method");
    
    let senddata={
      email: this.loginform.value.email,
      password: this.loginform.value.pwd
      
    }
    
   // console.log(senddata);
    let data=this.dataservice.login(senddata);
    if(data==true)
    {
      this.dataservice.alertForSuccess("Login Been Successfull","Login Status..!!!");
      this.router.navigate(['about']);
    }
    else
    {
      this.dataservice.alertforwarning("Login Not Allowed","Login Warning!!");
    }



  }
  else
  {
    this.dataservice.alertfordanger("Danger Login","Danger..!!!");
    console.log("empty file");
  }

  


}
}