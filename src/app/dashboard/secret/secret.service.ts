import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Secret, SecretList} from './secret';

@Injectable()
export class SecretService {
  constructor(private http: HttpClient) { }
  getSecretList(namespace: string): Observable<any> {
    if (namespace === 'all') {
    return this.http.get<SecretList>('/api/v1/secrets');
    } else {
      return this.http.get<SecretList>(`/api/v1/namespaces/${namespace}/secrets`);
    }
  }

  getSecret(namespace: string, name: string): Observable<any> {
    return this.http.get(`/api/v1/namespaces/${namespace}/secrets/${name}`);
  }
}
