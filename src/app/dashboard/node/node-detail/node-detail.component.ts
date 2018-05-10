import { Component, OnInit } from '@angular/core';
import {NodeService} from '../node.service';
import {ActivatedRoute} from '@angular/router';
import {V1Node} from '../../api';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss'],
  providers: [NodeService]
})
export class NodeDetailComponent implements OnInit {
  node: V1Node;
  constructor(private nodeService: NodeService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.initNode();
  }
  initNode() {
    const name = this.router.snapshot.paramMap.get('name');
    this.nodeService.readeNode(name)
      .subscribe(resp => {
        this.node = resp;
      });
  }

}
