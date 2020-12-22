import { Component, OnInit } from '@angular/core';
import { Employees_Array } from '../employee';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees = Employees_Array;
  // selectedEmploy: Employee;

  // onSelect(Employ: Department): void  {
  //   this.selectedEmploy = Employ;
  // }
}
