import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../Models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // isActive = true;
  departmentsArray: Department[] = [
    { id: 0, name: 'Please Select' },
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' },
    { id: 4, name: 'Payrol' }

  ];
  Deparment = 0;
  constructor() { }

  ngOnInit() {
  }
  ClickSaveSubmit(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
