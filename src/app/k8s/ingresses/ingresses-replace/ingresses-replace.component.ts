import {Component, Inject, OnInit} from '@angular/core';
import {dump as toYaml, load as fromYaml} from 'js-yaml';
import {IngressesService} from '../ingresses.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {V1beta1Ingress} from '../../api';

@Component({
  selector: 'app-ingresses-replace',
  templateUrl: './ingresses-replace.component.html',
  styleUrls: ['./ingresses-replace.component.scss'],
  providers: [IngressesService]
})
export class IngressesReplaceComponent implements OnInit {
  options: any = {maxLines: 1000, printMargin: false};
  text = toYaml(this.data);

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: V1beta1Ingress,
    private ingressesService: IngressesService,
    public dialogRef: MatDialogRef<IngressesReplaceComponent>
  ) { }

  ngOnInit() {
  }
  onClick(): void {
    this.ingressesService.replaceIngress(fromYaml(this.text))
      .subscribe(ingress => {
        if (ingress) {
          console.log('ingress return', ingress);
          location.reload();
        }
      });
    this.dialogRef.close();
  }

}
