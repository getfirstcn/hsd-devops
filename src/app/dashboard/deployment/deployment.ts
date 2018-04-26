export class Deployment {
  kind: 'Deployment';
  apiVersion: 'apps/v1';
  metadata: {
    name: string;
    namespace: string;
    labels: {
      [key: string]: string
    }
  };
  spec: {
      replicas: number,
      selector: {
        matchLabels: {
          [key: string]: string
        }
      },
      template: {
        metadata: {
          creationTimestamp: null,
          labels: {}
        },
        spec: {
          containers: [
            {
              name: string;
              image: string,
              ports: [Port];
              resources: {},
              imagePullPolicy: string
            }
            ],
          restartPolicy: string;
          terminationGracePeriodSeconds: number,
          dnsPolicy: string,
          hostNetwork: boolean,
          securityContext: {},
          schedulerName: string
        }
      },
      strategy: Strategy;
    };
  }

export class DeploymentList {
  kind: string;
  apiVersion: string;
  metadata: {};
  items: Deployment[];
}

export class Port {
  hostPort: number;
  containerPort: number;
  protocol: string;
}

export class Strategy {
  type: string;
  rollingUpdate: {
    maxUnavailable: string;
    maxSurge: string;
  };
}

export class Container {
  name: string;
  image: string;
  ports: [Port];
  env: [{}];
  resources: {};
  imagePullPolicy: string;
}

export class Metadata {
  name: string;
    namespace: string;
    generation: number;
    labels: {};
}
