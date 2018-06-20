import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-deployment-replace',
  templateUrl: './deployment-replace.component.html',
  styleUrls: ['./deployment-replace.component.scss']
})
export class DeploymentReplaceComponent implements OnInit {

  code = 'Critical dependency: the request of a dependency is an expression';
  constructor() { }
  ngOnInit() {
  }
}
