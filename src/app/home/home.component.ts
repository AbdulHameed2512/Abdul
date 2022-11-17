import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  goToContact(){
    this.route.navigate(['/contact'], {skipLocationChange :true});
  }
}
