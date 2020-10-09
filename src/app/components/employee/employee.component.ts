import { Component, OnInit } from '@angular/core';
import { EndpointsServices } from 'src/app/services/endpoints';

@Component({
  selector: 'app-employees',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: [];

  constructor(private endpoint: EndpointsServices) {
    endpoint.get_employee().subscribe(res => {
      this.employees = res.data;
      console.log('retorno da api: ' ,this.employees)
    })
   }

  ngOnInit(): void {

  }

}
