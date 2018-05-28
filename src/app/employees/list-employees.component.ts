import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';

@Component({
  // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [{
    id: 1,
    name: 'Harsh Gulati',
    gender: 'Male',
    email: 'harsh.gulati@outlook.com',
    phoneNumber: 7898121301,
    contactPreference: 'Komal Gulati',
    dateOfBirth: new Date('05/11/1986'),
    department: 'Home',
    isActive: true,
    photoPath: 'assets/images/harsh.jpg'
  },
  {
    id: 2,
    name: 'Komal Gulati',
    gender: 'female',
    email: 'komal.gulati@outlook.com',
    phoneNumber: 7898121301,
    contactPreference: 'Komal Gulati',
    dateOfBirth: new Date('01/12/1987'),
    department: 'Ministry',
    isActive: true,
    photoPath: 'assets/images/komal.jpg'
  },
  {
    id: 2,
    name: 'Vansh Gulati',
    gender: 'male',
    email: 'vansh.gulati@outlook.com',
    phoneNumber: 7898121301,
    contactPreference: 'vansh Gulati',
    dateOfBirth: new Date('05/08/2017'),
    department: 'sweetheart',
    isActive: false,
    photoPath: 'assets/images/vansh.jpg'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
