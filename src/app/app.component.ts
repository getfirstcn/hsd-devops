import { Component } from '@angular/core';
import { ToggleService } from './service/toggle.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ToggleService],
})
export class AppComponent {
}
