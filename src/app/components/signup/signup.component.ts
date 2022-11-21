import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { User } from 'src/app/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() onAddUser:EventEmitter<User> = new EventEmitter();

  firstName!:string;
  lastName!:string;
  username!:string;
  // dob!:Date;
  password!:string;
  Bio!:string;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.firstName){
      alert("Please enter in a first name");
      return
    }
    
    if(!this.lastName){
      alert("Please enter in a last name");
    }
    // ...continue this for all the req feilds

    const newUser:User = {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      // dob: this.dob,
      password: this.password,
      Bio: this.Bio
    };

    //emit the event for the outlayer to handle.
    this.onAddUser.emit(newUser);


    //clear out the data 
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    // this.dob = new Date();
    this.password = '';
    this.Bio = '';
  }

}
