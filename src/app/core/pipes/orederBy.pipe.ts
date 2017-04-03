import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe{

 transform(array : Array<any>, orderBy : any, asc : boolean = true){
 
     if (!orderBy || orderBy.trim() == ""){
       return array;
     } 

     if (asc){
       return Array.from(array).sort((item1: any, item2: any) => { 
         return this.orderByComparator(item1[orderBy], item2[orderBy]);
       });
     }
     else{
       return Array.from(array).sort((item1: any, item2: any) => { 
         return this.orderByComparator(item2[orderBy], item1[orderBy]);
       });
     }
 
 }
 
 orderByComparator(a:any, b:any):number{
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }
    return 0;
 }
}