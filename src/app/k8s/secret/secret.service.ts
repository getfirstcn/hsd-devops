import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1Secret, V1SecretList} from '../api';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  constructor(
    private http: HttpClient
  ) { }
  listSecrets(namespace: string): Observable<V1SecretList> {
    // console.log('namespace1', namespace);
    if (namespace === 'all') {
      return this.http.get<V1SecretList>(`/api/v1/secrets`);
    } else {
      return this.http.get<V1SecretList>(`/api/v1/namespaces/${namespace}/secrets`);
    }
  }
  readeSecret(namespace: string, name: string): Observable<V1Secret> {
    return this.http.get<V1Secret>(`/api/v1/namespaces/${namespace}/secrets/${name}`);
  }
}
