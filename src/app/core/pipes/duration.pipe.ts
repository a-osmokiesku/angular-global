import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number): string {
    if(value < 0){
        return "0 min";
    }
    let hours : number = Math.trunc(value / 60);
    let minutes: number = value % 60;
    let result : string = "";
    if(hours > 0){
        result += hours + "h ";
    }
    result += minutes + " min";
    return result;
  }
}