import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Namespace, NamespaceList} from './namespace';
import {of} from 'rxjs/observable/of';


@Injectable()
export class NamespaceService {
  namespace = 'all';
  constructor(private http: HttpClient) { }
  getNamepaceList(): Observable<any> {
    return this.http.get<Namespace>('/api/v1/namespaces')
      .pipe(
      tap(data => data.items)
      );
  }
  getNamespace(name: string): Observable<Namespace> {
    return this.http.get<Namespace>(`/api/v1/namespaces/${name}`);
  }
  setGlobalNamespace(name: string) {
    this.namespace = name;
  }
  getGlobalNamespace() {
    return of(this.namespace);
  }
}
