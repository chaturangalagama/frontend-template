import { AppConfigService } from '../../../../environments/app-config.service';
import { Subject, Observable } from 'rxjs';
import { HttpResponseBody } from '../../../core/objects/HttpResponseBody';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class DashboardService {
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    API_MEMBER_DETAILS_URL: any;

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private appConfig: AppConfigService) {
        this.API_MEMBER_DETAILS_URL = appConfig.getConfig().API_MEMBER_DETAILS_URL;
    }

}
