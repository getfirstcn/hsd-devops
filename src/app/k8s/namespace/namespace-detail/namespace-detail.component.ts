import { Component, OnInit } from '@angular/core';
import {NamespaceService} from '../namespace.service';
import {ActivatedRoute} from '@angular/router';
import {V1Namespace} from '../../api';

@Component({
  selector: 'app-namespace-detail',
  templateUrl: './namespace-detail.component.html',
  styleUrls: ['./namespace-detail.component.scss'],
  providers: [NamespaceService]
})
export class NamespaceDetailComponent implements OnInit {
  namespace: V1Namespace;

  constructor(
    private namespaceService: NamespaceService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.initNamespace();
  }
  initNamespace() {
    const name = this.route.snapshot.paramMap.get('name');
    this.namespaceService.getNamespace(name).subscribe(data => {
      this.namespace = data;
    });
  }

}
