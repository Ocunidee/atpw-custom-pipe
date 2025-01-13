import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'discounted'
})
export class DiscountedPipe implements PipeTransform {

  transform(value: number | null, discount?: number): number | null {
    if (discount === undefined) {
      return value
    }

    return value ? value * (1 - discount) : 0
  }
}
