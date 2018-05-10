import { Injectable } from '@angular/core';
import {V1beta1Ingress, V1beta1IngressList, V1Status} from '../api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class IngressService {

  constructor(private http: HttpClient) { }
  listIngreeses(namespace: string): Observable<any> {
    if (namespace === 'all') {
      return this.http.get<V1beta1IngressList>('/apis/extensions/v1beta1/ingresses');
    } else {
    return this.http.get<V1beta1IngressList>(`apis/extensions/v1beta1/namespaces/${namespace}/ingresses`);
  }
  }
  readIngrees(namespace: string, name: string): Observable<any> {
    return this.http.get<V1beta1Ingress>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses/${name}`);
  }
  deleteIngrees(namespace: string, name: string) {
    return this.http.delete<V1Status>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses/${name}`);
  }
  createIngress(body: V1beta1Ingress): Observable<V1beta1Ingress> {
    console.log('入口服务收到', body);
    const namespace = body.metadata.namespace;
    return this.http.post<V1beta1Ingress>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses`, body);
  }
}
