import { Component, OnInit } from '@angular/core';
import {Secret} from '../secret';
import {SecretService} from '../secret.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-secret-detail',
  templateUrl: './secret-detail.component.html',
  styleUrls: ['./secret-detail.component.scss'],
  providers: [SecretService]
})
export class SecretDetailComponent implements OnInit {
  secret: Secret;

  constructor(
    private secretService: SecretService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const namespace = this.route.snapshot.paramMap.get('namespace')
    const name = this.route.snapshot.paramMap.get('name')
    this.secretService.getSecret(namespace, name)
      .subscribe(data => this.secret = data);
  }
}
