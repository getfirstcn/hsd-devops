import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1ReplicationController, V1ReplicationControllerList, V1Status} from '../api';

@Injectable({
  providedIn: 'root'
})
export class ReplicationctrollersService {

  constructor(private http: HttpClient) { }
  listReplicationControllers(namespace: string): Observable<V1ReplicationControllerList> {
    if (namespace === 'all') {
    return this.http.get<V1ReplicationControllerList>(`/api/v1/replicationcontrollers`);
    } else {
      return this.http.get<V1ReplicationControllerList>(`/api/v1/namespaces/${namespace}/replicationcontrollers`);
    }
  }
  readReplicationController(namespace: string, name: string): Observable<V1ReplicationController> {
    return this.http.get<V1ReplicationController>(`/api/v1/namespaces/${namespace}/replicationcontrollers/${name}`);
  }
  deleteReplicationController(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/replicationcontrollers/${name}`);
  }
}
