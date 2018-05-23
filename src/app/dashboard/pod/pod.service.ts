import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Pod, PodList} from './pod';
import {V1Status} from '../api';

@Injectable()
export class PodService {

  constructor(private http: HttpClient) { }
  getpods(namespace: string): Observable<any> {
    if (namespace === 'all') {
      return this.http.get<PodList>('/api/v1/pods').pipe(
        map(({items}) => items),
        catchError(this.handleError('getpods', []))
      );
    } else {
    return this.http.get<PodList>(`/api/v1/namespaces/${namespace}/pods`).pipe(
      map(({items}) => items),
      catchError(this.handleError('getpods', []))
    );
    }
  }

  getpod(namespace: string, name: string): Observable<Pod> {
    return this.http.get<any>('/api/v1/namespaces/' + namespace + '/pods/' + name);
  }

  getpodWithLabel(namespace: string, label: string): Observable<Pod[]> {
    console.log('getpodWithlable获得label', label);
    const options =  label ? {params: new HttpParams().set('labelSelector', label)} : {};
    // return this.http.get<PodList>('/api/v1/namespaces/' + namespace + '/pods?labelSelector=' + label).pipe(
    return this.http.get<PodList>('/api/v1/namespaces/' + namespace + '/pods', options).pipe(
      map(({items}) => items ),
      catchError(this.handleError('getpodWithLabel', []))
      );
  }
  deletePod(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/pods/${name}`);
  }
  getLog(namespace: string, name: string): Observable<string> {
    return this.http.get<string>(`/api/v1/namespaces/${namespace}/pods/${name}/log?tailLines=100`)
      .pipe(
        tap(data => {
          console.log('服务收到', data);
        })
      );
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

