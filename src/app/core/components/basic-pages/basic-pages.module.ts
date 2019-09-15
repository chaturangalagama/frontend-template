import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

import { BasicPagesRoutingModule } from './basic-pages-routing.module';
import { SharedModule } from '../../../shared.module';

@NgModule({
  imports: [BasicPagesRoutingModule, FormsModule, CommonModule, SharedModule],
  declarations: [LoginComponent],
  providers: [],
  entryComponents: []
})
export class BasicPagesModule { }
