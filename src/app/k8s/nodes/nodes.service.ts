import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1Node, V1NodeList} from '../api';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor(
    private http: HttpClient
  ) { }
  listNodes(): Observable<V1NodeList> {
    return this.http.get<V1NodeList>(`/api/v1/nodes`);
  }
  readenodes(name: string): Observable<V1Node> {
    return this.http.get<V1Node>(`/api/v1/nodes/${name}`);
  }
}
