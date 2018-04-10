import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kv'
})
export class KvPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    for (const key in value) {
      return key + ': ' + value[key];
    }
  }
}
