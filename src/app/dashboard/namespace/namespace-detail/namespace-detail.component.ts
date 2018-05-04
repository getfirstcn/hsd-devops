import { Component, OnInit } from '@angular/core';
import {Namespace} from '../namespace';
import {NamespaceService} from '../namespace.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-namespace-detail',
  templateUrl: './namespace-detail.component.html',
  styleUrls: ['./namespace-detail.component.scss'],
  providers: [NamespaceService]
})
export class NamespaceDetailComponent implements OnInit {
  namespace: Namespace;

  constructor(private ns: NamespaceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.ns.getNamespace(name).subscribe(data => {
      this.namespace = data;
    });
  }
}
