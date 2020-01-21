import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
DataserviceService



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginform:FormGroup;
email:AbstractControl; //any variable name
pwd:AbstractControl;

  constructor(private formbuilder:FormBuilder,private dataservice:DataserviceService) {

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
  }
  else
  {
    console.log("empty file");
  }

  


}
}