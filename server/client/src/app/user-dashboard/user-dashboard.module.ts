import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TemplatesComponent } from './templates/templates.component';
import { ContractsComponent } from './contracts/contracts.component';
import { AddContractComponent } from './contracts/add-contract/add-contract.component';
import { EditContractComponent } from './contracts/edit-contract/edit-contract.component';
import { DetailContractComponent } from './contracts/detail-contract/detail-contract.component';
import { EventsComponent } from './events/events.component';
import { StartDateComponent } from './events/start-date/start-date.component';
import { EndDateComponent } from './events/end-date/end-date.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [UserDashboardComponent, TemplatesComponent, ContractsComponent, AddContractComponent, EditContractComponent, DetailContractComponent, EventsComponent, StartDateComponent, EndDateComponent, ProfileComponent, DashboardHomeComponent, NavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
