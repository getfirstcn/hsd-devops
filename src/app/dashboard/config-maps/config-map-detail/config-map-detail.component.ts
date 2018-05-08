import { Component, OnInit } from '@angular/core';
import {V1ConfigMap} from '../../api';
import {ConfigMapService} from '../config-map.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-config-map-detail',
  templateUrl: './config-map-detail.component.html',
  styleUrls: ['./config-map-detail.component.scss'],
  providers: [ConfigMapService]
})
export class ConfigMapDetailComponent implements OnInit {
  configmap: V1ConfigMap;

  constructor(private cms: ConfigMapService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initConfigMap();
  }
  initConfigMap() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.cms.readConfigMap(namespace, name)
      .subscribe(resp => {
        this.configmap = resp;
      });
  }
}
