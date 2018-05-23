import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1beta1DaemonSet, V1beta1DaemonSetList, V1Status} from '../api';


@Injectable()
export class DaemonSetService {

  constructor(private http: HttpClient) { }
  listDaemonSet(namespace: string): Observable<any> {
    if (namespace === 'all') {
      return this.http.get<V1beta1DaemonSetList>('/apis/apps/v1/daemonsets');
    } else {
      return this.http.get<V1beta1DaemonSetList>(`/apis/apps/v1/namespaces/${namespace}/daemonsets`);
    }
  }
  readDaemonSet(namespace: string, name: string): Observable<any> {
    return this.http.get<V1beta1DaemonSet>(`/apis/apps/v1/namespaces/${namespace}/daemonsets/${name}`);
  }
  deleteDaemonSet(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/apis/apps/v1/namespaces/${namespace}/daemonsets/${name}`);
  }
}
