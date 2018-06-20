import { Component, OnInit } from '@angular/core';
import {ConfigmapService} from '../configmap.service';
import {V1ConfigMap} from '../../api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-configmap-detail',
  templateUrl: './configmap-detail.component.html',
  styleUrls: ['./configmap-detail.component.scss'],
  providers: [ConfigmapService]
})
export class ConfigmapDetailComponent implements OnInit {
  configmap: V1ConfigMap

  constructor(
    private configmapService: ConfigmapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initConfigmap();
  }
  initConfigmap() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.configmapService.readConfigMap(namespace, name)
      .subscribe(configmap => {
        this.configmap = configmap;
      });
  }

}
