import { Component, OnInit } from '@angular/core';
import {StatefulsetsService} from '../statefulsets.service';
import {V1StatefulSet} from '../../api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-statefulset-detail',
  templateUrl: './statefulset-detail.component.html',
  styleUrls: ['./statefulset-detail.component.scss'],
  providers: [StatefulsetsService]
})
export class StatefulsetDetailComponent implements OnInit {
  statefulset: V1StatefulSet;

  constructor(
    private router: ActivatedRoute,
    private statefulsetsService: StatefulsetsService
  ) { }

  ngOnInit() {
    this.readeStatefulset();
  }
  readeStatefulset() {
    const namespace = this.router.snapshot.paramMap.get('namespace');
    const name = this.router.snapshot.paramMap.get('name');
    this.statefulsetsService.readeStatefulset(namespace, name)
      .subscribe(statefulset => {
        this.statefulset = statefulset;
      });
  }

}
