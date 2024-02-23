function getMax(arr:number[]):number{
    let maxi = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxi) maxi=arr[i]

    }
    return maxi
}
let arr=[5,2,3,4,6,8,1]
// console.log(getMax(arr));

function printBarChart(arr:number[]):void{
    let cols= arr.length;
    let row= getMax(arr)

    while(row>0){
        let s=""
        for(let j=0;j<cols;j++){
            if(arr[j]>=row) s+="*";
            else s+=" "
        }
       
        console.log(s);
        row--
        

    }

}
printBarChart(arr)
