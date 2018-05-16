import {
  V1ContainerPort,
  V1EnvFromSource,
  V1EnvVar,
  V1Lifecycle,
  V1Probe,
  V1ResourceRequirements,
  V1SecurityContext,
  V1VolumeDevice,
  V1VolumeMount
} from '../api';

export class Application {
}
export class Container {
  args = '';
  command = '';
  // 'envFrom': Array<V1EnvFromSource>;
  image = '';
  // 'imagePullPolicy': string;
  // 'lifecycle': V1Lifecycle;
  // 'livenessProbe': V1Probe;
  name = '';
  // ports : Array<V1ContainerPort>;
  // 'readinessProbe': V1Probe;
  // 'resources': V1ResourceRequirements;
  // 'securityContext': V1SecurityContext;
  // 'stdin': boolean;
  // 'stdinOnce': boolean;
  // 'terminationMessagePath': string;
  // 'terminationMessagePolicy': string;
  // 'tty': boolean;
  // 'volumeDevices': Array<V1VolumeDevice>;
  // 'volumeMounts': Array<V1VolumeMount>;
  // 'workingDir': string;
}


export class Env {
  name = 'app';
  value = '';
}

export class Service {
  ports = '';
  type = '';
}

export class Port {
  name = '';
  port = 80;
  protocol = 'tcp';
  targetPort = 80;
}
export class Rule {
  host = '';
  // http: {paths: Path[]};
}
export class Path {
  path = '';
  servicePort = 80;
  serviceName = '';
}

const DeploymentExample = {
  'apiVersion': 'extensions/v1beta1',
  'kind': 'Deployment',
  'metadata': {
    'annotations': {
    },
    'labels': {
      'app': 'nginx'
    },
    'name': 'kubernetes-dashboard',
    'namespace': 'kube-system',
  },
  'spec': {
    'progressDeadlineSeconds': 600,
    'replicas': 1,
    'revisionHistoryLimit': 10,
    'selector': {
      'matchLabels': {
        'app': 'nginx'
      }
    },
    'template': {
      'metadata': {
        'creationTimestamp': null,
        'labels': {
          'app': 'nginx'
        }
      },
      'spec': {
        'containers': [
          {
            'args': [],
            'image': 'registry.cn-hangzhou.aliyuncs.com/google_containers/kubernetes-dashboard-amd64:v1.8.3',
            'imagePullPolicy': 'IfNotPresent',
            'livenessProbe': {
              'failureThreshold': 3,
              'httpGet': {
                'path': '/',
                'port': 8443,
                'scheme': 'HTTPS'
              },
              'initialDelaySeconds': 30,
              'periodSeconds': 10,
              'successThreshold': 1,
              'timeoutSeconds': 30
            },
            'name': 'kubernetes-dashboard',
            'ports': [
              {
                'containerPort': 8443,
                'protocol': 'TCP'
              }
            ],
            'resources': {},
            'terminationMessagePath': '/dev/termination-log',
            'terminationMessagePolicy': 'File',
            'volumeMounts': [
              {
                'mountPath': '/certs',
                'name': 'kubernetes-dashboard-certs'
              },
              {
                'mountPath': '/tmp',
                'name': 'tmp-volume'
              }
            ]
          }
        ],
        'dnsPolicy': 'ClusterFirst',
        'restartPolicy': 'Always',
        'schedulerName': 'default-scheduler',
        'securityContext': {},
        'serviceAccount': 'kubernetes-dashboard',
        'serviceAccountName': 'kubernetes-dashboard',
        'terminationGracePeriodSeconds': 30,
        'tolerations': [
          {
            'effect': 'NoSchedule',
            'key': 'node-role.kubernetes.io/master'
          }
        ],
      }
    }
  },
}
