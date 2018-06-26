import { Component, OnInit } from '@angular/core';
import {DeploymentsService} from '../../deployments/deployments.service';
import {ServiceService} from '../../services/service.service';
import {IngressesService} from '../../ingresses/ingresses.service';
import * as yaml from 'js-yaml';


@Component({
  selector: 'app-application-yaml',
  templateUrl: './application-yaml.component.html',
  styleUrls: ['./application-yaml.component.scss'],
  providers: [DeploymentsService, ServiceService, IngressesService]
})
export class ApplicationYamlComponent implements OnInit {
  options: any = {maxLines: 1000, printMargin: false};
  code = yaml.dump(Date);
  deployment = yaml.dump(Deployment);
  service = yaml.dump(Service);
  ingress = yaml.dump(Ingress);

  constructor(
    private deploymentService: DeploymentsService,
    private serviceService: ServiceService,
    private ingressService: IngressesService
  ) { }

  ngOnInit() {
  }
  create() {
    const deployment = yaml.load(this.deployment);
    const service = yaml.load(this.service);
    const ingress = yaml.load(this.ingress);
    const namespace = deployment.metadata.namespace;
    const name = deployment.metadata.name;
    this.deploymentService.createDeployment(namespace, deployment)
      .subscribe(resp => {
        console.log('返回部署', resp);
      });
    this.serviceService.createService(namespace, service)
      .subscribe(resp => {
        console.log('返回服务', resp);
      });
    this.ingressService.createIngress(ingress)
      .subscribe(resp => {
        console.log('返回入口', resp);
      });
  }

}
const Deployment = {
  'apiVersion': 'apps/v1',
  'kind': 'Deployment',
  'metadata': {
    'annotations': {
    },
    'labels': {
      'app': 'nginx'   // 必填，修改
    },
    'name': 'nginx',  // 必填
    'namespace': 'default',   // 必填
  },
  'spec': {
    'progressDeadlineSeconds': 600,
    'replicas': 1,
    'revisionHistoryLimit': 10,
    'selector': {
      'matchLabels': {
        'app': 'nginx'   // 必填
      }
    },
    'template': {
      'metadata': {
        'creationTimestamp': null,
        'labels': {
          'app': 'nginx'  // 必填
        }
      },
      'spec': {
        'containers': [
          {
            'args': [],
            'image': 'nginx',  // 必填
            'imagePullPolicy': 'IfNotPresent',  // 必填
            'livenessProbe': {
              'failureThreshold': 3,
              'httpGet': {
                'path': '/',
                'port': 80,
                'scheme': 'HTTP'
              },
              'initialDelaySeconds': 30,
              'periodSeconds': 10,
              'successThreshold': 1,
              'timeoutSeconds': 30
            },
            'name': 'nginx',
            'ports': [
              {
                'containerPort': 80,
                'protocol': 'TCP'
              }
            ],
            'resources': {},
          }
        ],
        'dnsPolicy': 'ClusterFirst',
        'restartPolicy': 'Always',
        'schedulerName': 'default-scheduler',
        'securityContext': {},
        'serviceAccount': 'kubernetes-dashboard',
        'serviceAccountName': 'kubernetes-dashboard',
        'terminationGracePeriodSeconds': 30,
      }
    }
  },
};
const Service = {
  'apiVersion': 'v1',
  'kind': 'Service',
  'metadata': {
    'annotations': {
    },
    'labels': {
      'app': 'nginx'
    },
    'name': 'nginx',
    'namespace': 'default',
  },
  'spec': {
    'externalTrafficPolicy': 'Cluster',
    'ports': [
      {
        'port': 80,
        'protocol': 'TCP',
        'targetPort': 80
      }
    ],
    'selector': {
      'app': 'nginx'
    },
    'sessionAffinity': 'None',
    'type': 'NodePort'
  },
  'status': {
    'loadBalancer': {}
  }
};

const Ingress = {
  'apiVersion': 'extensions/v1beta1',
  'kind': 'Ingress',
  'metadata': {
    'name': 'nginx',
    'namespace': 'default',
  },
  'spec': {
    'rules': [
      {
        'host': 'nginx',
        'http': {
          'paths': [
            {
              'backend': {
                'serviceName': 'nginx',
                'servicePort': 80
              },
              'path': '/'
            }
          ]
        }
      }
    ]
  },
  'status': {
    'loadBalancer': {}
  }
};
