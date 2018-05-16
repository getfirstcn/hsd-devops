import {Component, Inject, OnInit} from '@angular/core';
import * as yaml from 'js-yaml';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import {V1Service} from '../../api';

@Component({
  selector: 'app-service-replace',
  templateUrl: './service-replace.component.html',
  styleUrls: ['./service-replace.component.scss'],
  providers: [ServiceService]
})
export class ServiceReplaceComponent implements OnInit {
  editorOptions = {theme: 'vs-dark', language: 'yaml'};
  // code = 'this.data';
  code = yaml.dump(this.data);
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: V1Service,
    private serviceService: ServiceService,
    private router: Router) { }

  ngOnInit() {
  }
  replace() {
    const value = yaml.load(this.code);
    const namespace = value.metadata.namespace;
    const name = value.metadata.name;
    this.serviceService.replaceService(namespace, name, value)
      .subscribe(resp => {
        if ( resp.statusText === 'OK') {
          console.log('修改成功', resp);
          this.router.navigate(['/dashboard']);
        } else {
          console.log('修改失败', resp);
        }
      });
  }

}
