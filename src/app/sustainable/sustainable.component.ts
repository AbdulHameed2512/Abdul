import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sustainable',
  templateUrl: './sustainable.component.html',
  styleUrls: ['./sustainable.component.css']
})
export class SustainableComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  goToContact(){
    this.route.navigate(['/contact'], {skipLocationChange:true});
  }

}
