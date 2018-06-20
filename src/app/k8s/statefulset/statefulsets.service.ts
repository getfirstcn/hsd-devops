import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1StatefulSet, V1StatefulSetList, V1StatefulSetStatus, V1Status} from '../api';

@Injectable({
  providedIn: 'root'
})
export class StatefulsetsService {

  constructor(
    private http: HttpClient) { }
  listStatefulsetsList(namespace: string): Observable<V1StatefulSetList> {
    if (namespace === 'all') {
      return this.http.get<V1StatefulSetList>(`/apis/apps/v1/replicasets`);
    } else {
      return this.http.get<V1StatefulSetList>(`/apis/apps/v1/namespaces/${namespace}/replicasets`);
    }
  }
  readeStatefulset(namespace: string, name: string ): Observable<V1StatefulSet> {
    return this.http.get<V1StatefulSet>(`/apis/apps/v1/namespaces/${namespace}/replicasets/${name}`);
  }
  createStatefulset(namespace: string, body: V1StatefulSet): Observable<V1StatefulSet> {
    return this.http.post<V1StatefulSet>(`/apis/apps/v1/namespaces/${namespace}/replicasets`, body);
  }
  replaceStatefulset(namespace: string, name: string, body: V1StatefulSet): Observable<V1StatefulSet> {
    return this.http.put<V1StatefulSet>(`/apis/apps/v1/namespaces/${namespace}/replicasets/${name}`, body);
  }
  deleteStatefulset(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/apis/apps/v1/namespaces/${namespace}/replicasets/${name}`);
  }
}
