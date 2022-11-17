import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToContact(){
    this.route.navigate(['/contact'],{skipLocationChange:true});
  }
}
