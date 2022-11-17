import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  goToContact(){
    this.route.navigate(['/contact'] , {skipLocationChange:true});
  }
}
