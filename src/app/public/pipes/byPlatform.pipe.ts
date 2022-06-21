import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/app/core/shared/models/products.model';
import * as _ from 'underscore';

@Pipe({
    name: 'byPlatform'
})

export class byPlatformPipe implements PipeTransform {
    transform(products: Products[], platform: string = ''): Products[] {

      const outproducts = products.filter((out) => out.platform.includes(platform));
      return outproducts.slice(0,4);

    }
}
