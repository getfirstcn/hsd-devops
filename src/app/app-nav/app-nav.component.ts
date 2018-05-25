import {Component, OnChanges, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router, UrlSegment, UrlSegmentGroup, UrlTree} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit, OnChanges {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches)
    );
  namespace = 'default';
  selected = 'default';

  constructor(private breakpointObserver: BreakpointObserver,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }
  ngOnInit() {
  }
  ngOnChanges() {}
  namespaces = [
    {value: 'all', viewValue: '所有'},
    {value: 'default', viewValue: 'default'},
    {value: 'kube-system', viewValue: 'kube-system'},
    ];

  cluster = [
    {
      name: '命名空间',
      route: '/k8s/namespace',
    },
    {
      name: '节点',
      route: '/k8s/nodes',
    },
    {
      name: '存储',
      route: `/k8s/persistentvolumes`,
      namespace: this.namespace,
    },
  ];
  workers = [
    {
      name: '定时任务',
      route: `/k8s/cronjobs`,
      namespace: this.namespace,
    },
    {
      name: '部署',
      route: `/k8s/deployments`,
      namespace: this.namespace,
    },
    {
      name: '容器组',
      route: `/k8s/pods`,
      namespace: this.namespace,
    },
    {
      name: '副本集',
      route: `/k8s/replicasets`,
      namespace: this.namespace,
    },
    {
      name: '副本控制器',
      route: `/k8s/replicationcontrollers`,
      namespace: this.namespace,
    },
    {
      name: '状态副本集',
      route: `/k8s/statefulsets`,
      namespace: this.namespace,
    }
  ];
  services = [
    {
      name: '服务',
      route: `/k8s/services`,
      namespace: this.namespace,
    },
    {
      name: '网关',
      route: `/k8s/ingresses`,
      namespace: this.namespace,
    }
  ];
  secrets = [
    {
      name: '配置',
      route: `/k8s/configmaps`,
      namespace: this.namespace,
    },
    {
      name: '存储请求',
      route: `/k8s/persistentvolumeclaims`,
      namespace: this.namespace,
    },
    {
      name: '秘密',
      route: `/k8s/secrets`,
      namespace: this.namespace,
    }
  ];
  resetUrl(namespace) {
    const path = this.location.path();
     const tree: UrlTree = this.router.parseUrl(path);
    // const ns = tree.queryParams;
     tree.queryParams = {'namespace': namespace};
     this.router.navigateByUrl(tree);
     console.log('segment', tree);
  }
  setNamespace(value) {
    // this.router.navigate(['/k8s/namespace']);
    console.log('节点值', value);
    this.cluster = [
      {
        name: '命名空间',
        route: '/k8s/namespace',
      },
      {
        name: '节点',
        route: '/k8s/nodes',
      },
      {
        name: '存储',
        route: `/k8s/persistentvolumes`,
        namespace: value,
      },
    ];
    this.workers = [
      {
        name: '定时任务',
        route: `/k8s/cronjobs`,
        namespace: value,
      },
      {
        name: '部署',
        route: `/k8s/deployments`,
        namespace: value,
      },
      {
        name: '容器组',
        route: `/k8s/pods`,
        namespace: value,
      },
      {
        name: '副本集',
        route: `/k8s/replicasets`,
        namespace: value,
      },
      {
        name: '副本控制器',
        route: `/k8s/replicationcontrollers`,
        namespace: value,
      },
      {
        name: '状态副本集',
        route: `/k8s/statefulsets}`,
        namespace: value,
      }
    ];
    this.services = [
      {
        name: '服务',
        route: `/k8s/services`,
        namespace: value,
      },
      {
        name: '网关',
        route: `/k8s/ingresses`,
        namespace: value,
      }
    ];
    this.secrets = [
      {
        name: '配置',
        route: `/k8s/configmaps`,
        namespace: value,
      },
      {
        name: '存储请求',
        route: `/k8s/persistentvolumeclaims`,
        namespace: value,
      },
      {
        name: '秘密',
        route: `/k8s/secrets`,
        namespace: value,
      }
    ];
    this.resetUrl(value);
  }
}
