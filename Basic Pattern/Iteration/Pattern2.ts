let n=5;
let s=""

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){

        if(i==j){
            s+="\\"
        }
        else{
            s+="_"
        }
    } s+="\n"
    console.log(s);
    
}