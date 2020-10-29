import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteguardService } from '../routeguard.service';

import { ContractsComponent } from './contracts/contracts.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
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
        { path: 'contracts', component: ContractsComponent },
        { path: 'templates', component: TemplatesComponent },
        { path: 'events', component: EventsComponent },
        { path: 'profile', component: ProfileComponent },
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
