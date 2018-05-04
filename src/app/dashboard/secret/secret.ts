export class Secret {
  // kind: 'Secret';
  // apiVersion: 'v1';
  metadata: {
    name: string,
    namespace: string,
    selfLink: string,
    uid: string,
    resourceVersion: number,
    creationTimestamp: Date,
    annotations: {
    }
  };
  data: {
    'ca.crt': string,
    namespace: string,
    token: string
  };
  type: string;
}

export class SecretList {
  kind: 'SecretList';
  apiVersion: 'v1';
  metadata: {
    selfLink: string,
    resourceVersion: number
  };
  items: Secret[];
}
