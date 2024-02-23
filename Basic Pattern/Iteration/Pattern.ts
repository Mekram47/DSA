let n=17;
function diamond(n:number){
let star=1;
let spaces=Math.floor(n/2);
let s:string="";

for(let i=1;i<=n;i++){
    // For adding spaces 
    for(let j=1;j<=spaces;j++){
        s+=" "
    }
    // for adding stars 
    for(let j=1;j<=star;j++){
        s+="*"
    }
    s+="\n"
    if(i<Math.floor(n/2)){
        star+=2
        spaces-=1
    }
    else{
        star-=2
        spaces+=1

    }
}
console.log(s);


}
diamond(n)