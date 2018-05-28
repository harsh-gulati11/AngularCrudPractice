import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../Models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // isActive = true;
  datePickerConfig: Partial<BsDatepickerConfig>;
  dob: Date = new Date(2018, 0, 11);
  departmentsArray: Department[] = [
    { id: 0, name: 'Please Select' },
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' },
    { id: 4, name: 'Payrol' }

  ];
  Deparment = 0;
  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 12, 31),
        dateInputFormat: 'DD/MM/YYYY'

      });

  }

  ngOnInit() {
  }
  ClickSaveSubmit(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
