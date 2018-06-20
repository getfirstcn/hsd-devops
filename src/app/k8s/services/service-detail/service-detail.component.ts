import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {ActivatedRoute} from '@angular/router';
import {V1Service} from '../../api';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  providers: [ServiceService]
})
export class ServiceDetailComponent implements OnInit {
  namespace: string;
  name: string;
  service: V1Service;

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.namespace = this.route.snapshot.paramMap.get('namespace');
    this.name = this.route.snapshot.paramMap.get('name');
    this.serviceService.readeServices(this.namespace, this.name).subscribe(
      service => {this.service = service; console.log('zujian', service); }
    );
  }
}
