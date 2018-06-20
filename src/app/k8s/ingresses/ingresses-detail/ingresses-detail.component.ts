import { Component, OnInit } from '@angular/core';
import {IngressesService} from '../ingresses.service';
import {ActivatedRoute} from '@angular/router';
import {V1beta1Ingress} from '../../api';

@Component({
  selector: 'app-ingresses-detail',
  templateUrl: './ingresses-detail.component.html',
  styleUrls: ['./ingresses-detail.component.scss'],
  providers: [IngressesService]
})
export class IngressesDetailComponent implements OnInit {
  ingress: V1beta1Ingress

  constructor(
    private route: ActivatedRoute,
    private ingressService: IngressesService
  ) { }

  ngOnInit() {
    this.getIngress();
  }
  getIngress() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.ingressService.readeIngress(namespace, name)
      .subscribe(ingress => {
        this.ingress = ingress;
      });
  }

}
