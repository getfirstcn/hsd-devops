import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {V1Pod, V1PodList, V1Status} from '../api';
import {catchError, map} from 'rxjs/internal/operators';
import {T} from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class PodsService {

  constructor(private http: HttpClient) {
  }

  listPods(namespace: string): Observable<V1PodList> {
    if (namespace === 'all') {
      return this.http.get<V1PodList>('/api/v1/pods');
    } else {
      return this.http.get<V1PodList>(`/api/v1/namespaces/${namespace}/pods`);
    }
  }

  readePods(namespace: string, name: string): Observable<V1Pod> {
    return this.http.get<V1Pod>(`/api/v1/namespaces/${namespace}/pods/${name}`);
  }


  listPodsWithLabel(namespace: string, label: string): Observable<V1PodList> {
    const options = label ? {params: new HttpParams().set('labelSelector', label)} : {};
    return this.http.get<V1PodList>(`/api/v1/namespaces/${namespace}/pods`, options);
  }

  deletePods(namespace: string, name: string): Observable<V1Pod> {
    return this.http.delete<V1Pod>(`/api/v1/namespaces/${namespace}/pods/${name}`);
  }
  readeLog(namespace: string, name: string): Observable<string> {
    return this.http.get<string>(`/api/v1/namespaces/${namespace}/pods/${name}/log?tailLines=100`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
