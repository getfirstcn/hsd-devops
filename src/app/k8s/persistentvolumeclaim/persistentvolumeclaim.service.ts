import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1PersistentVolumeClaim, V1PersistentVolumeClaimList, V1Status} from '../api';

@Injectable({
  providedIn: 'root'
})
export class PersistentvolumeclaimService {

  constructor(private http: HttpClient) { }
  listPersistentVolumeClaims(namespace: string): Observable<V1PersistentVolumeClaimList> {
    console.log('命名空间1', namespace);
    if (namespace === 'all') {
      return this.http.get<V1PersistentVolumeClaimList>('/api/v1/persistentvolumeclaims');
    } else {
      return this.http.get<V1PersistentVolumeClaimList>(`/api/v1/namespaces/${namespace}/persistentvolumeclaims`);
    }
  }
  readePersistentVolumeClaim(namespace: string, name: string): Observable<V1PersistentVolumeClaim> {
    return this.http.get<V1PersistentVolumeClaim>(`/api/v1/namespaces/${namespace}/persistentvolumeclaims/${name}`);
  }
  deletePersistentVolumeClaim(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/persistentvolumeclaims/${name}`);
  }
}
