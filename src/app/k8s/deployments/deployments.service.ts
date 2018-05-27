import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {V1beta2Deployment, V1beta2DeploymentList, V1Status} from '../api';

@Injectable({
  providedIn: 'root'
})
export class DeploymentsService {

  constructor(private http: HttpClient) { }
  listDeployments(namespace: string): Observable<any> {
    if (namespace === 'all') {
      return this.http.get<V1beta2DeploymentList>('/apis/apps/v1/deployments');
    } else {
      return this.http.get<V1beta2DeploymentList>(`/apis/apps/v1/namespaces/${namespace}/deployments`);
    }
  }


  readeDeployment(namespace: string, name: string): Observable<any> {
    return this.http.get<V1beta2Deployment>('/apis/apps/v1/namespaces/' + namespace + '/deployments/' + name);
  }

  createDeployment(namespace: string, body: V1beta2Deployment): Observable<any> {
    return this.http.post<V1beta2Deployment>('/apis/apps/v1/namespaces/' + namespace + '/deployments', body);
  }

  deleteDeployment(namespace: string, name: string): Observable<V1Status> {
    console.log('service namespace:', namespace, 'service name:', name);
    const url = `/apis/apps/v1/namespaces/${namespace}/deployments/${name}`;
    console.log(url);
    return this.http.delete<V1Status>(`/apis/apps/v1/namespaces/${namespace}/deployments/${name}`);
  }

  replaceDeployment(body: V1beta2Deployment): Observable<HttpResponse<V1beta2Deployment>> {
    const namespace = body.metadata.namespace;
    const name = body.metadata.name;
    return this.http.put<V1beta2Deployment>(`/apis/apps/v1/namespaces/${namespace}/deployments/${name}`, body, { observe: 'response' });
  }
}
