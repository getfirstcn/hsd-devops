import { Component, OnInit } from '@angular/core';
import {IngressService} from '../ingress.service';
import {ActivatedRoute} from '@angular/router';
import {V1beta1Ingress} from '../../api';

@Component({
  selector: 'app-ingress-detail',
  templateUrl: './ingress-detail.component.html',
  styleUrls: ['./ingress-detail.component.scss'],
  providers: [IngressService]
})
export class IngressDetailComponent implements OnInit {
   ingress: V1beta1Ingress;
  constructor(private route: ActivatedRoute,
              private ingressService: IngressService) { }

  ngOnInit() {
    this.getIngress();
  }
  getIngress() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.ingressService.readIngrees(namespace, name)
      .subscribe(ingress => {
        console.log('readIngress', ingress);
        this.ingress = ingress;
      });
  }
}
