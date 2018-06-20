import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1ReplicaSet, V1ReplicaSetList, V1Status} from '../api';

@Injectable({
  providedIn: 'root'
})
export class ReplicasetsService {

  constructor(
    private http: HttpClient
  ) { }

  listReplicatSets(namespace: string): Observable<V1ReplicaSetList> {
    if (namespace === 'all') {
      return this.http.get<V1ReplicaSetList>(`/apis/apps/v1/replicasets`);
    } else {
      return this.http.get<V1ReplicaSetList>(`/apis/apps/v1/namespaces/${namespace}/replicasets`);
    }
  }
  readReplicaSet(namespace: string, name: string): Observable<V1ReplicaSet> {
    return this.http.get<V1ReplicaSet>(`/apis/apps/v1/namespaces/${namespace}/replicasets/${name}`);
  }

  deleteReplicaSet(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/replicasets/${name}`);
  }
}
