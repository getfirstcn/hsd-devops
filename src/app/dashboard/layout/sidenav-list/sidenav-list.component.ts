import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NamespaceService} from '../../namespace/namespace.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],

})
export class SidenavListComponent implements OnInit, AfterViewInit {

  constructor(
    private ns: NamespaceService,
    private router: Router
  ) { }
  cluster = [
    {
      name: '命名空间',
      route: '/dashboard/namespace',
    },
    {
      name: '节点',
      route: '/dashboard/nodes',
    },
    {
      name: '存储',
      route: '/dashboard/persistentvolumes',
    },
  ];
  workers = [
    {
      name: '定时任务',
      route: '/dashboard/cronjobs',
    },
    {
      name: '部署',
      route: '/dashboard/deployments',
    },
    {
      name: '任务',
      route: '/dashboard/jobs',
    },
    {
      name: '容器组',
      route: '/dashboard/pods',
    },
    {
      name: '副本集',
      route: '/dashboard/replicasets',
    },
    {
      name: '副本控制器',
      route: '/dashboard/replicationcontrollers',
    },
    {
      name: '状态副本集',
      route: '/dashboard/statefulsets',
    }
  ];
  services = [
    {
      name: '服务',
      route: '/dashboard/services',
    },
    {
      name: '网关',
      route: '/dashboard/ingress',
    }
  ];
  secrets = [
    {
      name: '配置',
      route: '/dashboard/configmaps',
    },
    {
      name: '存储请求',
      route: '/dashboard/persistentvolumeclaims',
    },
    {
      name: '秘密',
      route: '/dashboard/secrets',
    }
  ];
  namespaces = ['all', 'default', 'kube-system'];
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  setNamespace(node) {
    this.ns.namespace.next(node);
    this.ns.globalNamespace = node;
    console.log('节点值', node);
    // this.router.navigate()
  }
}
