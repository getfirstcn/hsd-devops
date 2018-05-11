import { Component, OnInit } from '@angular/core';
import * as yaml from 'js-yaml';

@Component({
  selector: 'app-deployment-replace',
  templateUrl: './deployment-replace.component.html',
  styleUrls: ['./deployment-replace.component.scss']
})
export class DeploymentReplaceComponent implements OnInit {
  json = {'hostname': 'localhost'};
  yml: any;
  constructor() { }

  ngOnInit() {
   const doc  = yaml.load('greeting: hello\nname: world');
   const conf = yaml.dump(this.json);
   console.log(doc);
   console.log(conf);
  }
}
