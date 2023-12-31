// sort colors / sort 0's, 1's, 2's / Dutch national flag.

function sortColors(a:number[]):number[]{
    let low:number =0;
    let high:number = a.length - 1;
    let mid:number =0;
    let temp:number;

    while(mid <= high){
        switch(a[mid]){
            case 0:{
                temp = a[low];
                a[low] = a[mid] ;
                a[mid] = temp;
                low++;
                mid++;
                break;
            }
            case 1:{
                mid++;
                break;
            }
            case 2:{
                temp = a[mid];
                a[mid] = a[high];
                a[high] = temp;
                high--;
                break;
            }
        }
    }
    return a;

}
let a:number[] = [0,0,0,1,1,1,0,2,0,1,2,2,1];
let sortedcolors:number[] = sortColors(a);
console.log(`sorted colors are : ${sortedcolors}`);
