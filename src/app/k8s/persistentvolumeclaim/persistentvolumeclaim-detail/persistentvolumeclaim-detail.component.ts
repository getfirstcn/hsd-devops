import { Component, OnInit } from '@angular/core';
import {PersistentvolumeclaimService} from '../persistentvolumeclaim.service';
import {ActivatedRoute} from '@angular/router';
import {V1PersistentVolumeClaim} from '../../api';

@Component({
  selector: 'app-persistentvolumeclaim-detail',
  templateUrl: './persistentvolumeclaim-detail.component.html',
  styleUrls: ['./persistentvolumeclaim-detail.component.scss'],
  providers: [PersistentvolumeclaimService]
})
export class PersistentvolumeclaimDetailComponent implements OnInit {
  persistentvolumeclaim: V1PersistentVolumeClaim;

  constructor(
    private service: PersistentvolumeclaimService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initPersistentVolumeclaim();
  }
  initPersistentVolumeclaim() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.service.readePersistentVolumeClaim(namespace, name)
      .subscribe(pvc => this.persistentvolumeclaim = pvc);
  }
}
