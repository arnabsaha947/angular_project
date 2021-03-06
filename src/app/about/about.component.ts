import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: string;

  
  constructor(private router:Router) { }

  ngOnInit() {

    this.getIdFromLocalStorage();
  }

  getIdFromLocalStorage()
  {
    this.id = localStorage.getItem("ID");
    console.log("......>> ",this.id);
  }

  logout()
  {
    localStorage.removeItem("ID")
    this.router.navigate(['login']);
  }

}
