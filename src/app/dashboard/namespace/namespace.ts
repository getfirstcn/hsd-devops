export class Namespace {
  kind: string;
  apiVersion: string;
  metadata: {
    name: string,
    selfLink: string,
    uid: string,
    resourceVersion: 6,
    creationTimestamp: Date
  };
  spec: {
    finalizers: [
      'kubernetes'
      ]
  };
  status: {
    phase: string
  };
}

export class NamespaceList {
  kind: string;
  apiVersion: 'v1';
  metadata: {
    selfLink: string,
    resourceVersion: number
  };
  items: Namespace[];
}
