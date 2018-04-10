import { Component, OnInit } from '@angular/core';
import {DeploymentsService} from '../deployments.service';
import {Deployment} from '../deployment';

@Component({
  selector: 'app-deployment-detail',
  templateUrl: './deployment-detail.component.html',
  styleUrls: ['./deployment-detail.component.scss'],
  providers: [DeploymentsService]
})
export class DeploymentDetailComponent implements OnInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  naespace = 'default';
  name = 'hsd-dashboard';
  deployment: any;
  dataSource: any;

  constructor(
   private deploymentService: DeploymentsService
  ) { }

  ngOnInit() {
    this.deploymentService.getDeployment(this.naespace, this.name)
      .subscribe(deployment => {this.deployment = deployment; this.dataSource = [deployment]; console.log(deployment); }
      );
  }
}
const DATA = [
  {
    "kind": "Deployment",
    "apiVersion": "apps/v1",
    "metadata": {
      "name": "hsd-dashboard",
      "namespace": "default",
      "selfLink": "/apis/apps/v1/namespaces/default/deployments/hsd-dashboard",
      "uid": "aea9dc64-332f-11e8-bd50-6a5d786b4247",
      "resourceVersion": "133159",
      "generation": 4,
      "creationTimestamp": "2018-03-29T09:00:52Z",
      "labels": {
        "k8s-app": "hsd-dashboard"
      },
      "annotations": {
        "deployment.kubernetes.io/revision": "4"
      }
    },
    "spec": {
      "replicas": 1,
      "selector": {
        "matchLabels": {
          "k8s-app": "hsd-dashboard"
        }
      },
      "template": {
        "metadata": {
          "creationTimestamp": null,
          "labels": {
            "k8s-app": "hsd-dashboard"
          }
        },
        "spec": {
          "volumes": [
            {
              "name": "nginx-conf",
              "configMap": {
                "name": "hsd-dashboard-nginx-conf",
                "defaultMode": 420
              }
            },
            {
              "name": "default-conf",
              "configMap": {
                "name": "hsd-dashboard-default-conf",
                "defaultMode": 420
              }
            },
            {
              "name": "tmp-volume",
              "emptyDir": {}
            },
            {
              "name": "kube-config",
              "hostPath": {
                "path": "/root/.kube",
                "type": ""
              }
            }
          ],
          "containers": [
            {
              "name": "hsd-dashboard",
              "image": "heshidai/hsd-dashboard:v0.0.1",
              "command": [
                "bash",
                "-c",
                "nginx&&gunicorn --worker-class=gevent -w4 getdevops.wsgi:application -b127.0.0.1:8000"
              ],
              "ports": [
                {
                  "hostPort": 80,
                  "containerPort": 80,
                  "protocol": "TCP"
                }
              ],
              "resources": {},
              "volumeMounts": [
                {
                  "name": "kube-config",
                  "mountPath": "/root/.kube"
                },
                {
                  "name": "nginx-conf",
                  "mountPath": "/mnt/nginx"
                },
                {
                  "name": "default-conf",
                  "mountPath": "/etc/nginx/conf.d"
                },
                {
                  "name": "tmp-volume",
                  "mountPath": "/tmp"
                }
              ],
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File",
              "imagePullPolicy": "IfNotPresent"
            }
          ],
          "restartPolicy": "Always",
          "terminationGracePeriodSeconds": 30,
          "dnsPolicy": "ClusterFirst",
          "hostNetwork": true,
          "securityContext": {},
          "schedulerName": "default-scheduler"
        }
      },
      "strategy": {
        "type": "RollingUpdate",
        "rollingUpdate": {
          "maxUnavailable": "25%",
          "maxSurge": "25%"
        }
      },
      "revisionHistoryLimit": 10,
      "progressDeadlineSeconds": 600
    },
    "status": {
      "observedGeneration": 4,
      "replicas": 1,
      "updatedReplicas": 1,
      "readyReplicas": 1,
      "availableReplicas": 1,
      "conditions": [
        {
          "type": "Progressing",
          "status": "True",
          "lastUpdateTime": "2018-03-29T09:42:13Z",
          "lastTransitionTime": "2018-03-29T09:00:52Z",
          "reason": "NewReplicaSetAvailable",
          "message": "ReplicaSet \"hsd-dashboard-6df46dbd98\" has successfully progressed."
        },
        {
          "type": "Available",
          "status": "True",
          "lastUpdateTime": "2018-03-30T11:51:45Z",
          "lastTransitionTime": "2018-03-30T11:51:45Z",
          "reason": "MinimumReplicasAvailable",
          "message": "Deployment has minimum availability."
        }
      ]
    }
  }]
