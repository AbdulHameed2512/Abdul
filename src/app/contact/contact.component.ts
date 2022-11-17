import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userForm :FormGroup | any;

  constructor() { }

  districtList =[
    {"districtName" :'Chennai',},
  {"districtName" :'Chengalpet'},
  {"districtName" :'Coimbatore'},
    {"districtName" :'Others'}
  ]

  ngOnInit(): void {

    this.userForm = new FormGroup({
      'firstname' : new FormControl(null,Validators.required ),
      'lastname' : new FormControl(null),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'country' : new FormControl(null),
      'message' : new FormControl(null),
    }); 
   
    }
    onSubmit(){
      console.log(this.userForm)
      this.userForm.reset(this.userForm)
  }
  
}
