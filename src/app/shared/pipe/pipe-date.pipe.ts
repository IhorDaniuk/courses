import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class PipeDatePipe implements PipeTransform {

  transform( value: number ):string {
    return  value > 60 ? `${ Math.floor(value / 60)} h ${value % 60} m` : `${value} m`;
}

}
