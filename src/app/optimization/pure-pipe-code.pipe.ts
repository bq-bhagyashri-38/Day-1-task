import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipeCode',
  standalone: true,
  pure: true  
})
export class PurePipeCodePipe implements PipeTransform {

  transform(value: string): string {
    return value + ' Tamrakar';
  }

}
