import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AlertService } from '../../../../core/services/util-services/alert.service';
import { BussinessStoreService } from '../../../../core/services/api-services/store-bussiness.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiMemberDetailsService: DashboardService, private alertService: AlertService,
    private storeBussinessService: BussinessStoreService) {
  }

  ngOnInit() {
    
  }

}
