import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {V1Status, V1ConfigMap, V1ConfigMapList} from '../api';
@Injectable()
export class ConfigMapService {
  constructor(private http: HttpClient) { }
  listConfigMaps(namespace: string): Observable<V1ConfigMapList> {
    if ( namespace === 'all') {
      return this.http.get<V1ConfigMapList>('/api/v1/configmaps');
    } else {
      return this.http.get<V1ConfigMapList>(`/api/v1/namespaces/${namespace}/configmaps`);
    }
  }
  readConfigMap(namespace: string, name: string): Observable<V1ConfigMap> {
    return this.http.get<V1ConfigMap>(`/api/v1/namespaces/${namespace}/configmaps/${name}`);
  }
  deleteConfigMap(namespace: string, name: string): Observable<any> {
    return this.http.delete<V1Status>(`/api/v1/namespaces/${namespace}/configmaps/${name}`);
  }
}
