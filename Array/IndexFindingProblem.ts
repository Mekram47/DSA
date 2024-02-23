function linearSearch(arr:number[],target:number):number{
    for(let i=0;i<arr.length;i++){
        if(arr[i]== target){
            return i
        }
    }
    return -1

}

let arr=[10,20,30,40,50,60,70,80,90,100,110,120,130,140]

let index=linearSearch(arr,100)
console.log(index);
