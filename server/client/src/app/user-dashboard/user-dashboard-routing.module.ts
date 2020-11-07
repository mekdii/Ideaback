import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteguardService } from '../routeguard.service';

import { ContractsComponent } from './contracts/contracts.component';
import { DetailContractComponent } from './contracts/detail-contract/detail-contract.component';
import { EditContractComponent } from './contracts/edit-contract/edit-contract.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './templates/forms/forms.component';
import { RentalComponent } from './templates/rental/rental.component';
import { TemplatesComponent } from './templates/templates.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const UserDashboardRoutes: Routes = [{
  path: '',
  component: UserDashboardComponent,
  canActivate: [RouteguardService],
  children: [
    {
      path: '',
      children: [
        { path: 'contract', component: ContractsComponent },
        {
          path: 'contract/details/:id',
          component: DetailContractComponent,
          data: { title: 'Contract Details' }
        },
        {
          path: 'contract/edit/:id',
          component: EditContractComponent,
          data: { title: 'Edit Contract' }
        },
        { path: 'templates', component: TemplatesComponent},
        {path: 'templates/rental', component: RentalComponent},
        { path: 'templates/rental/:id', component: FormsComponent},
        { path: 'events', component: EventsComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'Dashboard', component: UserDashboardComponent },
        { path: '', component: DashboardHomeComponent }
        
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(UserDashboardRoutes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
