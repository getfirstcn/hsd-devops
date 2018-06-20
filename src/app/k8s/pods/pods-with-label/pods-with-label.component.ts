import {Component, Input, OnInit} from '@angular/core';
import {PodsService} from '../pods.service';

@Component({
  selector: 'app-pods-with-label',
  templateUrl: './pods-with-label.component.html',
  styleUrls: ['./pods-with-label.component.scss'],
  providers: [PodsService]
})
export class PodsWithLabelComponent implements OnInit {
  displayedColumns = ['name', 'namespace', 'label', 'pods', 'image', 'createDate'];
  dataSource: any;
  @Input()namespace: string;
  @Input()label: string;

  constructor(
    private podsService: PodsService
  ) { }

  ngOnInit() {
  this.podsService.listPodsWithLabel(this.namespace, this.label)
    .subscribe(pods => {this.dataSource = pods.items; console.log(pods); } );
  }

}
