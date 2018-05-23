import { Injectable } from '@angular/core';
import {PersistentVolumeClaim, V1Status} from './persistent-volume-claims';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class PersistentVolumeClaimsService {

  constructor(private http: HttpClient) { }
  listPersistentVolumeClaims(namespace: string): Observable<any> {
    if (namespace === 'all') {
      return this.http.get<PersistentVolumeClaim[]>('/api/v1/persistentvolumeclaims')
        .pipe(tap(data => data.items));
    } else {
      return this.http.get(`/api/v1/namespaces/${namespace}/persistentvolumeclaims`)
        .pipe(tap(data => data.items));
    }
  }
  readePersistentVolumeClaim(namespace: string, name: string): Observable<any> {
    return this.http.get<PersistentVolumeClaim>(`/api/v1/namespaces/${namespace}/persistentvolumeclaims/${name}`);
  }
  deletePersistentVolumeClaim(namespace: string, name: string): Observable<any> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/persistentvolumeclaims/${name}`);
  }
}
