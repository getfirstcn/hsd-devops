import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Node, NodeList} from './node';

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }
  getNodeList(): Observable<any> {
    return this.http.get<Node[]>('/api/v1/nodes')
  }
  getNode(name: string): Observable<any> {
    return this.http.get<Node>(`/api/v1/nodes/${name}`);
  }
}
