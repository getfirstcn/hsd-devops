import {Component, Inject, OnInit} from '@angular/core';
import {dump as toYaml, load as fromYaml} from 'js-yaml';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ServiceService} from '../service.service';
import {V1Service} from '../../api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-replace',
  templateUrl: './service-replace.component.html',
  styleUrls: ['./service-replace.component.scss'],
  providers: [ServiceService]
})
export class ServiceReplaceComponent implements OnInit {
  options: any = {maxLines: 1000, printMargin: false};
  text = toYaml(this.data);

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: V1Service,
    public service: ServiceService,
    public dialogRef: MatDialogRef<ServiceReplaceComponent>
  ) { }

  ngOnInit() {
  }
  onClick(): void {
    this.service.replaceService(fromYaml(this.text))
      .subscribe(service => {
        if (service) {
          location.reload();
        }
      });
    this.dialogRef.close();
  }

}
