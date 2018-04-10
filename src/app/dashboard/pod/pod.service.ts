import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Pod, PodList} from './pod';

@Injectable()
export class PodService {

  constructor(private http: HttpClient) { }
  getpods(namespace: string): Observable<Pod[]> {
    return this.http.get<PodList>('/api/v1/namespaces/' + namespace + '/pods').pipe(
      map(({items}) => items),
      catchError(this.handleError('getpods', []))
    );
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

