import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  constructor() { }
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
      route: '/dashboard/jobs',
    },
    {
      name: '部署',
      route: '/dashboard/deployments',
    },
    {
      name: '任务',
      route: '/dashboard/deployments',
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
      route: '/dashboard/statefulset',
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
      route: '/dashboard/ingress',
    },
    {
      name: '存储请求',
      route: '/dashboard/ingress',
    },
    {
      name: '秘密',
      route: '/dashboard/ingress',
    }
  ];
  ngOnInit() {
  }

}
