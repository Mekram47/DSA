function subArrayProblem(arr:any[]):void{

    for(let sp=0;sp<arr.length;sp++){


        for(let ep=sp;ep<arr.length;ep++){

            let res:any[]=[]

            for(let i=sp;i<ep;i++) res.push(arr[i]);

            console.log(res);
            
        }
    }
}
let arr=[9,8,7,6,5];
subArrayProblem(arr);

