import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {ServiceService} from '../service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';



@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
  providers: [ServiceService]
})
export class ServiceDetailComponent implements OnInit {
  namespace: string;
  name: string;
  service: Service;

  constructor(
    private serverService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.namespace = this.route.snapshot.paramMap.get('namespace');
    this.name = this.route.snapshot.paramMap.get('name');
    this.serverService.getservice(this.namespace, this.name).subscribe(
      service => {this.service = service; console.log('zujian', service); }
    );
  }
}
