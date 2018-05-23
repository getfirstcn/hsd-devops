import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Node, NodeList} from './node';
import {V1Node, V1NodeList} from '../api';

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }
  getNodeList(): Observable<any> {
    return this.http.get<V1NodeList>('/api/v1/nodes');
  }
  readeNode(name: string): Observable<V1Node> {
    return this.http.get<V1Node>(`/api/v1/nodes/${name}`);
  }
}
