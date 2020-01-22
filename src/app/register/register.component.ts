import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup
  fname: AbstractControl;
  mail: AbstractControl;

  constructor(private formbuilder: FormBuilder) { 

    this.registerform=this.formbuilder.group({

      fname: ['',[Validators.required]],
      mail: ['',[Validators.required]]

    });
    this.fname=this.registerform.controls['fname'];
    this.mail=this.registerform.controls['mail'];
  }

  ngOnInit() {
    

  }

  registered()
  {
     console.log(" ",this.registerform.value.fname);
     console.log(" ",this.registerform.value.mail)
  }

}
