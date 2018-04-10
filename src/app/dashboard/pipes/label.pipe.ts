import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'label'
})
export class LabelPipe implements PipeTransform {
  transform(value: any, args?: any): any {
      for (const key in value) {
        return key + '=' + value[key];
      }
    }
}
