import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: any): any[] {
    if (items && searchText) {
      return items.filter((item) => {
        let s = '';
        Object.getOwnPropertyNames(item).forEach((i) => {
          s += item[i];
        });
        return s.toLowerCase().includes(searchText.toLowerCase());
      });
    }
    return items;
  }

  // return value.filter((individualCustomer) =>
  // individualCustomer.firstName.toLocaleLowerCase().includes(firstName.toLocaleLowerCase())
  // transform(value: IndividualCustomer[]| CorporateCustomer[], filterText: string):IndividualCustomer[] | CorporateCustomer[] {
  //   {
  //     filterText = filterText?filterText.toLocaleLowerCase():"";
  //     return filterText?value
  //     .filter((p:IndividualCustomer, c:CorporateCustomer)=>p.firstName.toLocaleLowerCase.indexOf(filterText)!==-1)
  //     :value;
  // }
  // }
}
