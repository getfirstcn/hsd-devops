import { Injectable } from '@angular/core';
import {promise} from 'selenium-webdriver';

@Injectable()
export class ToggleService {
  promise = true;
  toggle() {
    return true;
  }

  constructor() { }

}
