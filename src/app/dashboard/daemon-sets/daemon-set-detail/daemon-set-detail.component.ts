import { Component, OnInit } from '@angular/core';
import {V1beta1DaemonSet} from '../../api';
import {ActivatedRoute} from '@angular/router';
import {DaemonSetService} from '../daemon-set.service';

@Component({
  selector: 'app-daemon-set-detail',
  templateUrl: './daemon-set-detail.component.html',
  styleUrls: ['./daemon-set-detail.component.scss'],
  providers: [DaemonSetService]
})
export class DaemonSetDetailComponent implements OnInit {
  daemonSet: V1beta1DaemonSet;

  constructor(private router: ActivatedRoute,
              private ds: DaemonSetService) { }
  getDaemonSet() {
    const namespace = this.router.snapshot.paramMap.get('namespace');
    const name = this.router.snapshot.paramMap.get('name');
    this.ds.readDaemonSet(namespace, name)
      .subscribe(resp => this.daemonSet = resp);
  }

  ngOnInit() {
    this.getDaemonSet();
  }
}
