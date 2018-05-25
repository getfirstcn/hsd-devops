import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {V1Namespace, V1NamespaceList} from '../api';

@Injectable({
  providedIn: 'root'
})
export class NamespaceService {
  globalNamespace = 'all';
  namespace: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) { }
  listNamespace(): Observable<V1NamespaceList> {
    return this.http.get<V1NamespaceList>('/api/v1/namespaces');
  }
  getNamespace(name: string): Observable<V1Namespace> {
    return this.http.get<V1Namespace>(`/api/v1/namespaces/${name}`);
  }
  getGlobalNamespace() {
    return of(this.globalNamespace);
  }
}
