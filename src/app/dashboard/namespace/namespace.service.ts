import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';
import {Namespace, NamespaceList} from './namespace';


@Injectable()
export class NamespaceService {
  globalNamespace = 'all';
  namespace: Subject<string> = new Subject<string>();
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
  getGlobalNamespace() {
    return of(this.globalNamespace);
  }
}
