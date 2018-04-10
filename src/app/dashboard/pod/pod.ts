export class Pod  {
  metadata: {
    name: string,
    generateName: string,
    namespace: string,
    selfLink: string,
    uid: string,
    resourceVersion: string,
    creationTimestamp: string,
    labels: {},
    ownerReferences: [
      {
        apiVersion: string,
        kind: string,
        name: string,
        uid: string,
        controller: boolean,
        blockOwnerDeletion: boolean
      }
      ]
  };
  spec: {
    volumes: [
      {
        name: string,
        configMap: {
          name: string,
          defaultMode: number
        }
      },
      {
        name: string,
        configMap: {
          name: string,
          defaultMode: number
        }
      },
      {
        name: string,
        emptyDir: {}
      },
      {
        name: string,
        hostPath: {
          path: string,
          type: string
        }
      },
      {
        name: string,
        secret: {
          secretName: string,
          defaultMode: number
        }
      }
      ],
    containers: [
      {
        name: string,
        image: string,
        command: [string],
        ports: [
          {
            hostPort: number,
            containerPort: number,
            protocol: string
          }
          ],
        resources: {},
        volumeMounts: [
          {
            name: string,
            mountPath: string
          },
          {
            name: string,
            mountPath: string
          },
          {
            name: string,
            mountPath: string
          },
          {
            name: string,
            mountPath: string
          },
          {
            name: string,
            readOnly: true,
            mountPath: string
          }
          ],
        terminationMessagePath: string,
        terminationMessagePolicy: string,
        imagePullPolicy: string
      }
      ],
    restartPolicy: string,
    terminationGracePeriodSeconds: number,
    dnsPolicy: string,
    serviceAccountName: string,
    serviceAccount: string,
    nodeName: string,
    hostNetwork: boolean,
    securityContext: {},
    schedulerName: string,
    tolerations: [
      {
        key: string,
        operator: string,
        effect: string,
        tolerationSeconds: number
      },
      {
        key: string,
        operator: string,
        effect: string,
        tolerationSeconds: number
      }
      ]
  };
  status: {
    phase: string,
    conditions: [
      {
        type: string,
        status: boolean,
        lastProbeTime: null,
        lastTransitionTime: string
      },
      {
        type: string,
        status: boolean,
        lastProbeTime: null,
        lastTransitionTime: string
      },
      {
        type: string,
        status: boolean,
        lastProbeTime: null,
        lastTransitionTime: string
      }
      ],
    hostIP: string,
    podIP: string,
    startTime: string,
    containerStatuses: [
      {
        name: string,
        state: {
          running: {
            startedAt: string
          }
        },
        lastState: {},
        ready: boolean,
        restartCount: number,
        image: string,
        imageID: string,
        containerID: string
      }
      ],
    qosClass: string
  };
}

export class PodList  {
  kind: string;
  apiVersion: string;
  metadata: {
    selfLink: string,
    resourceVersion: number
  };
  items: Pod[];
}

export interface Element {
  name: string;
  namespace: string;
  label: string;
  pods: string;
  image: string;
  createDate: string;
  icon: string;
}
