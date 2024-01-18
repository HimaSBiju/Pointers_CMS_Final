import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddEmployeesComponent} from './add-employees/add-employees.component'
import{ListEmployeesComponent}from './list-employees/list-employees.component'

const routes: Routes = [
  {
    path:'emp-add',component:AddEmployeesComponent
  },
  {
    path:'emp-list',component:ListEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MEmployeesRoutingModule { }
