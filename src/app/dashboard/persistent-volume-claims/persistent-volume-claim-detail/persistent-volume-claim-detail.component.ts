import { Component, OnInit } from '@angular/core';
import {PersistentVolumeClaim} from '../persistent-volume-claims';
import {PersistentVolumeClaimsService} from '../persistent-volume-claims.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-persistent-volume-claim-detail',
  templateUrl: './persistent-volume-claim-detail.component.html',
  styleUrls: ['./persistent-volume-claim-detail.component.scss'],
  providers: [PersistentVolumeClaimsService],
})
export class PersistentVolumeClaimDetailComponent implements OnInit {
  persistentvolumeclaim: PersistentVolumeClaim;
  constructor(private pvcs: PersistentVolumeClaimsService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    this.readPersistentVolumeClaim(namespace, name);
  }
  readPersistentVolumeClaim(namespace: string, name: string) {
    this.pvcs.readePersistentVolumeClaim(namespace, name)
      .subscribe(pvc => this.persistentvolumeclaim = pvc);
  }
}
