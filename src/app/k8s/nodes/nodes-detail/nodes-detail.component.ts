import { Component, OnInit } from '@angular/core';
import {NodesService} from '../nodes.service';
import {ActivatedRoute} from '@angular/router';
import {V1Node} from '../../api';

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.scss'],
  providers: [NodesService]
})
export class NodesDetailComponent implements OnInit {
  node: V1Node;

  constructor(
    private nodeService: NodesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initNode();
  }
  initNode() {
    const name = this.route.snapshot.paramMap.get('name');
    this.nodeService.readenodes(name)
      .subscribe(node => {
        this.node = node;
      });
  }
}
