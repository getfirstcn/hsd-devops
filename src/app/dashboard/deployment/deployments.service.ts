import { Injectable } from '@angular/core';
import {Deployment, DeploymentList} from './deployment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class DeploymentsService {
  private deployments: DeploymentList;
  private apiServer = 'http://127.0.0.1:4500';
  private path = '/apis/apps/v1/namespaces/default/deployments';
  private hostUrl = this.apiServer + this.path;

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
  ) { }
  getDeployments(): Observable<any> {
    return this.http.get<DeploymentList>(this.path).pipe(
      map(({items}) => items),
        catchError(this.handleError('getdeployments', []))
      );
  }

  getDeployment(namespace: string, name: string): Observable<any> {
    return this.http.get<Deployment>('/apis/apps/v1/namespaces/' + namespace + '/deployments/' + name).pipe(
      catchError(this.handleError('getdeployment', []))
    );
  }
}
