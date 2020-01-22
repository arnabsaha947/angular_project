import { Component } from '@angular/core';
import { Router } from '@angular/router';
  Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  idcheck: string;

  ngOnInit() {
    this.idcheck=localStorage.getItem('ID');
    this.checkForLogin()
  }

  constructor(private router: Router)
  {}

  checkForLogin()
  {
    if(this.idcheck == null || this.idcheck == "")
    {
      this.router.navigate(['login']);
    }
    
  }

}
