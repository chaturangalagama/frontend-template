import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../../shared.module';
import { MemberCreationComponent } from './member-details/member-creation/member-creation.component';
import { ViewsRoutingModule } from './views-routing.module';
import { ApiMemberDetailsService } from "./member-details/api-member-details.service";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    MemberCreationComponent,
    DashboardComponent
  ],

  providers: [
    ApiMemberDetailsService,
    DashboardService
  ]
})
export class ViewsModule { }
