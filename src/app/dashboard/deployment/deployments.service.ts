import { Injectable } from '@angular/core';
import {Deployment, DeploymentList} from './deployment';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {V1Deployment, V1Status} from '../api';
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
  getDeployments(namespace: string): Observable<any> {
    if (namespace === 'all') {
      return this.http.get<DeploymentList>('/apis/apps/v1/deployments').pipe(
        map(({items}) => items),
        catchError(this.handleError('getdeployments', []))
      );
    } else {
    return this.http.get<DeploymentList>(`/apis/apps/v1/namespaces/${namespace}/deployments`).pipe(
      map(({items}) => items),
        catchError(this.handleError('getdeployments', []))
      );
    }
  }

  getDeployment(namespace: string, name: string): Observable<any> {
    return this.http.get<Deployment>('/apis/apps/v1/namespaces/' + namespace + '/deployments/' + name).pipe(
      catchError(this.handleError('getdeployment', []))
    );
  }

  createDeployment(namespace: string, body: V1Deployment): Observable<any> {
    return this.http.post<V1Deployment>('/apis/apps/v1/namespaces/' + namespace + '/deployments', body);
  }
  deleteDeployment(namespace: string, name: string): Observable<V1Status> {
    console.log('service namespace:', namespace, 'service name:', name);
    const url = `/apis/apps/v1/namespaces/${namespace}/deployments/${name}`;
    console.log(url);
    return this.http.delete<V1Status>(`/apis/apps/v1/namespaces/${namespace}/deployments/${name}`);
  }
  replaceDeployment(body: V1Deployment): Observable<HttpResponse<V1Deployment>> {
    const namespace = body.metadata.namespace;
    const name = body.metadata.name;
    return this.http.put<V1Deployment>(`/apis/apps/v1/namespaces/${namespace}/deployments/${name}`, body, { observe: 'response' });
  }
}
