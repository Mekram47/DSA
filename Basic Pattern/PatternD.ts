var n:number= 17;


function Diamond(n:number){
    let star=1;
        let spaces=  Math.floor(n/2);
let s="";

    for(let i=1;i<=n;i++){
        
        

        for(let j=1; j<=spaces;j++){
            s+=" "
        }
        for(let j=1;j<=star;j++){
            s+="*"
        }
        s+="\n"

        if(i<=Math.floor(n/2)){
            star+=2;
            spaces-=1
        }else{
            star-=2
            spaces+=1
        }
    }
    console.log(s);
    

}
Diamond(n)