import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1Service, V1ServiceList, V1Status} from '../api';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  listServices(namespace: string): Observable<V1ServiceList> {
    if (namespace === 'all') {
      return this.http.get<V1ServiceList>(`/api/v1/services`);
    } else {
      return this.http.get<V1ServiceList>(`/api/v1/namespaces/${namespace}/services`);
    }
  }
  readeServices(namespace: string, name: string): Observable<V1Service> {
    return this.http.get<V1Service>(`/api/v1/namespaces/${namespace}/services/${name}`);
  }
  createService(namespace: string, body: V1Service): Observable<V1Service> {
    return this.http.post<V1Service>(`/api/v1/namespaces/${namespace}/services`, body);
  }
  deleteService(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/services/${name}`);
  }
  replaceService(namespace: string, name: string, body: V1Service): Observable<V1Service> {
    return this.http.put<V1Service>(`/api/v1/namespaces/${namespace}/Services/${name}`, body);
  }
}
