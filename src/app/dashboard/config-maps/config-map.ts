export class ConfigMap {
  metadata: {
    name: string,
    namespace: string,
    selfLink: string,
    uid: string,
    resourceVersion: number,
    creationTimestamp: Date
  };
  data: object;
}
export class ConfigMaps {
  kind: 'ConfigMapList';
  apiVersion: 'v1';
  metadata: object;
  items: ConfigMap[];
}

