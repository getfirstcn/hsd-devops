import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  providers: [ServiceService]
})
export class ServiceDetailComponent implements OnInit {
  namespace = 'default';
  name = 'hsd-dashboard';
  service: Service;

  constructor(private serverService: ServiceService) { }

  ngOnInit() {
    this.serverService.getservice(this.namespace, this.name).subscribe(
      service => {this.service = service; console.log('zujian', service); }
    );
  }

}
