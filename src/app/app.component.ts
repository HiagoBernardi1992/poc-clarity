import { Component, OnInit } from '@angular/core';
import { IUser } from './model/user.model';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : IUser[] = [
    { id: 1, name: "user 1", creation: new Date, color: "Red" },
    { id: 2, name: "user 2", creation: new Date, color: "Red" },
    { id: 3, name: "user 3", creation: new Date, color: "Red" },
    { id: 4, name: "user 4", creation: new Date, color: "Red" },
    { id: 5, name: "user 5", creation: new Date, color: "Red" },
    { id: 6, name: "user 6", creation: new Date, color: "Red" },
    { id: 7, name: "user 7", creation: new Date, color: "Red" },
    { id: 8, name: "user 8", creation: new Date, color: "Red" },
    { id: 9, name: "user 9", creation: new Date, color: "Red" },
    { id: 10, name: "user 10", creation: new Date, color: "Red" },
  ];

  refresh(state: ClrDatagridStateInterface){
    console.log('state', state);
  }
}
