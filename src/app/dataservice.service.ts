import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 // mail: any;
 // pswrd: any;
 

  constructor() { }

  
  login(data)
  {
   let mail = data.email;
   let pswrd = data.password;

   if(mail=="abc@gmail.com" && pswrd=="sahaa")
  {
      console.log("Login successfull");
  }
  else{
    console.log("Invalid Entry");
  }

  }
}

