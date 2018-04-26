import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {AppsV1beta1Deployment} from '../api';


@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }
  addDeployment(deployment: AppsV1beta1Deployment): Observable<AppsV1beta1Deployment> {
    console.log('收到部署信息', deployment);
    return this.http.post<AppsV1beta1Deployment>('/apis/apps/v1/namespaces/default/deployments', deployment)
      .pipe(
        tap(
          data => console.log('deployment', data)
        ),
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code $(error.status),` + `body was: ${error.error}`
    );
    }
    return error;
  }

}


