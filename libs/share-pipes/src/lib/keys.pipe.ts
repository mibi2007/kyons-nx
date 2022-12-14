import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: { [x: string]: any; }): any {
    const keys = [];
    for (const key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}
