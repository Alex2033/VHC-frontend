import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension'
})
export class ExtensionPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.substr(value.lastIndexOf('.') + 1);
  }

}
