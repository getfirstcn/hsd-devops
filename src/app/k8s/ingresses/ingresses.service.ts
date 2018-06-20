import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1beta1Ingress, V1beta1IngressList, V1Status} from '../api';

@Injectable({
  providedIn: 'root'
})
export class IngressesService {

  constructor(private http: HttpClient) { }
  listIngresses(namespace: string): Observable<V1beta1IngressList> {
    if (namespace === 'all') {
      return this.http.get<V1beta1IngressList>(`/apis/extensions/v1beta1/ingresses`);
    } else {
      // console.log(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses`);
      return this.http.get<V1beta1IngressList>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses`);
    }
  }
  readeIngress(namespace: string, name: string): Observable<V1beta1Ingress> {
    return this.http.get<V1beta1Ingress>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses/${name}`);
  }
  deleteIngress(namespace: string, name: string): Observable<V1Status> {
    return this.http.delete<V1Status>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses/${name}`);
  }
  createIngress(body: V1beta1Ingress): Observable<V1beta1Ingress> {
    const namespace = body.metadata.namespace;
    return this.http.post<V1beta1Ingress>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses`, body);
  }
  replaceIngress(body: V1beta1Ingress): Observable<V1beta1Ingress> {
    const namespace = body.metadata.namespace;
    const name = body.metadata.name;
    return this.http.put<V1beta1Ingress>(`/apis/extensions/v1beta1/namespaces/${namespace}/ingresses/${name}`, body);
  }
}
