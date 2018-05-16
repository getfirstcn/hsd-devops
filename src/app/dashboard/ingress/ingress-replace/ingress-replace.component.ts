import {Component, Inject, OnInit} from '@angular/core';
import * as yaml from 'js-yaml';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IngressService} from '../ingress.service';
import {Router} from '@angular/router';
import {V1beta1Ingress} from '../../api';

@Component({
  selector: 'app-ingress-replace',
  templateUrl: './ingress-replace.component.html',
  styleUrls: ['./ingress-replace.component.scss'],
  providers: [IngressService]
})
export class IngressReplaceComponent implements OnInit {
  editorOptions = {theme: 'vs-dark', language: 'yaml'};
  // code = 'this.data';
  code: V1beta1Ingress = yaml.dump(this.data);

  constructor(@Inject(MAT_DIALOG_DATA) private data: V1beta1Ingress,
    private ingressService: IngressService,
              private router: Router) { }

  ngOnInit() {
  }
  replace() {
    const value = yaml.load(this.code);
    this.ingressService.replaceIngress(value)
      .subscribe(resp => {
        this.router.navigate(['/dashboard/ingresses']);
      });
  }
}
