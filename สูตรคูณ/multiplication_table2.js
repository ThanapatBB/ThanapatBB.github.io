let op = document.getElementById("op");
function ตกลง()
{
    
    
    for(let a = 2;a<=12;a++){
        for(let i = 1;i<=12;i++){
            op.innerHTML+=a+" * "+i+" = "+(a*i)+"<br>"
        }
    }
    
}
function รีเซ็ต()
{
    op.innerHTML="";
}