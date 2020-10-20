import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemurl'
})
export class ItemurlPipe implements PipeTransform {
  url:string;
  transform(value: any, ...args: any[]): any {
    this.url="https://dev.khaoaurbachao.com/image.php?image=assets/admin/images/items_images/"+value+"&height=300px&width=300px&zc=1&ct=0";
    return this.url;
  }

}
