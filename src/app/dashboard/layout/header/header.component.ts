import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() agreed: string;
  @Input() disagreed: string;
  @Output() makeopend = new EventEmitter<boolean>();
  home = '/dashboard';
  makeopen (agreed: boolean) {
    this.makeopend.emit(agreed);
  }


  ngOnInit() {
  }

}
