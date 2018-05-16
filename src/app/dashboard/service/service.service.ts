import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Service, ServiceList} from './service';
import {V1Service, V1Status} from '../api';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  getservices(namespace: string): Observable<any> {
    if (namespace === 'all') {
      return this.http.get<ServiceList>('/api/v1/services').pipe(
        map(({items}) => items),
        catchError(this.handleError('getservices', []))
      );
    } else {
    return this.http.get<ServiceList>('/api/v1/namespaces/' + namespace + '/services').pipe(
      map(({items}) => items),
      catchError(this.handleError('getservices', []))
    );
    }
  }

  getservice(namespace: string, name: string): Observable<any> {
    return this.http.get<Service>('/api/v1/namespaces/' + namespace + '/services/' + name).pipe(
      catchError(this.handleError('getservice', []))
    );
  }
  createService(namespace: string, body: V1Service) {
    return this.http.post<V1Service>(`/api/v1/namespaces/${namespace}/services`, body);
  }
  deleteService(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/services/${name}`);
  }

  replaceService(namespace: string, name: string, body: V1Service): Observable<HttpResponse<V1Service>> {
    return this.http.put<V1Service>(`/api/v1/namespaces/${namespace}/services/${name}`, body, { observe: 'response'});
  }

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
}
