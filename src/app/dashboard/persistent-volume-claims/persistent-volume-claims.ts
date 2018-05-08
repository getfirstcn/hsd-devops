export class PersistentVolumeClaim {
  kind: 'PersistentVolumeClaim';
  apiVersion: 'v1';
  metadata: {
    name: string,
    namespace: string,
    selfLink: string,
    uid: string,
    resourceVersion: number,
    creationTimestamp: Date,
    annotations: {
    },
    finalizers: [string]
  };
  spec: {
    accessModes: [
      string
      ],
    selector: {
      matchLabels: {
        release: string
      },
      matchExpressions: [
        {
          key: string,
          operator: string,
          values: [
            string
            ]
        }
        ]
    },
    resources: {
      requests: {
        storage: string
      }
    },
    storageClassName: string
  };
  status: {
    phase: string
  };
}

export class V1DeleteOptions {
  apiVersion: string;
  kind: string;
  orphanDependents: boolean;
  preconditions: {};
  propagationPolicy: string;
}

export class V1Status {
  apiVersion: string;
  code: number;
  details: object;
  kind: string;
  message: string;
  metadata: object;
  reason: string;
  status: string;
}
