import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MEmployeesRoutingModule } from './m-employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';


@NgModule({
  declarations: [EmployeesComponent, AddEmployeesComponent, ListEmployeesComponent],
  imports: [
    CommonModule,
    MEmployeesRoutingModule
  ]
})
export class MEmployeesModule { }
