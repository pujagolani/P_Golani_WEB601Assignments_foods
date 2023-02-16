import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contenttype'
})
export class ContenttypePipe implements PipeTransform {

  transform(contents: Content[], contentType?: string): Content[] {
    if (contentType) {
      return contents.filter(content => content.type === contentType);
    } else {
      return contents.filter(content => !content.type);
    }
  }

}
