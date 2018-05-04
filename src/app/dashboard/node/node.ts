export class NodeList {
  kind: 'NodeList';
  apiVersion: 'v1';
  metadata: {
    selfLink: '/api/v1/nodes',
    resourceVersion: number
  };
  items: Node[];
}

export class Node {
  kind: 'Node';
  apiVersion: 'v1';
  metadata: {
    name: string,
    selfLink: string,
    uid: string,
    resourceVersion: number,
    creationTimestamp: Date,
    labels: {
    },
    annotations: {
    }
  };
  spec: {
    podCIDR: string,
    externalID: string
  };
  status: {
    capacity: {
      cpu: number,
      ephemeralStorage: string,
      hugepages1Gi: number,
      hugepages2Mi: number,
      memory: string,
      pods: number
    },
    allocatable: {
      cpu: number,
      ephemeralStorage: number,
      hugepages1Gi: 0,
      hugepages2Mi: 0,
      memory: string,
      pods: number
    },
    conditions: [
      {
        type: string,
        status: boolean,
        lastHeartbeatTime: Date,
        lastTransitionTime: Date,
        reason: string,
        message: string
      }
      ],
    addresses: [
      {
        type: string,
        address: string
      }
      ],
    daemonEndpoints: {
      kubeletEndpoint: {
        Port: number
      }
    },
    nodeInfo: {
      machineID: string,
      systemUUID: string,
      bootID: string,
      kernelVersion: string,
      osImage: string,
      containerRuntimeVersion: string,
      kubel: string
      kubeProxyVersion: string,
      operatingSystem: string,
      architectur: string
    };
    images: [
      {
        names: [
          string
          ],
        sizeBytes: number
      }
      ]
  };
}

export class Capacity {
  cpu: number;
  ephemeralStorage: string;
  hugepages1Gi: number;
  hugepages2Mi: number;
    memory: string;
    pods: number;
}
