let n = document.getElementById("ip");
// console.log(N);
let op = document.getElementById("op");
// console.log(op);

function ok()
{
    let num = parseInt(n.value);
    // console.log("num = ",num);
    let i = 1
    op.innerHTML="";
    
    if(num<=12 && num >= 1)
    {
        for(;i<=12;i++)
        op.innerHTML+=num+" * "+i+" = "+(num*i)+"<br>";
    }
}

function clr()
{
    n.value="";
    op.innerHTML="";
}