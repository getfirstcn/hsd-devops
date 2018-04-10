export class Service {
  kind: string;
  apiVersion: string;
  metadata: {
    name: string,
    namespace: string,
    selfLink: string,
    uid: string,
    resourceVersion: number,
    creationTimestamp: string,
    labels: {}
  };
  spec: {
    ports: [
      {
        protocol: string,
        port: number,
        targetPort: number,
        nodePort: number
      }
      ],
    selector: {},
    clusterIP: string,
    type: string,
    sessionAffinity: string,
    externalTrafficPolicy: string
  };
  status: {
    loadBalancer: {}
  };
}

export class ServiceList {
  kind: string;
  apiVersion: string;
  metadata: {
    selfLink: string,
    resourceVersion: number
  };
  items: Service[];
}
