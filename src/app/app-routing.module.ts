import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeesComponent} from './m-employees/employees.component'

const routes: Routes = [
  {
    path:'employees', component:EmployeesComponent,
    loadChildren: () => import('./m-employees/m-employees.module').then(x => x.MEmployeesModule)//lazy module
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

