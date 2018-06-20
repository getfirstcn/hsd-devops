import { Component, OnInit } from '@angular/core';
import {SecretService} from '../secret.service';
import {V1Secret} from '../../api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-secrets-detail',
  templateUrl: './secrets-detail.component.html',
  styleUrls: ['./secrets-detail.component.scss'],
  providers: [SecretService]
})
export class SecretsDetailComponent implements OnInit {
  secret: V1Secret;

  constructor(
    private secretService: SecretService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initSecret();
  }
  initSecret() {
    const namespace = this.route.snapshot.paramMap.get('namespace');
    const name = this.route.snapshot.paramMap.get('name');
    console.log('11', namespace, name);
    this.secretService.readeSecret(namespace, name)
      .subscribe(data => this.secret = data);
  }

}
