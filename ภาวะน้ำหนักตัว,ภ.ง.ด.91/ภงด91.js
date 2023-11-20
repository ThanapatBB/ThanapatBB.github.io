let p = document.getElementById("salary");
// console.log(p);
// console.log(typeof(p));
let showsalary = document.getElementById("showsalary")
let think = document.getElementById("think");
let think1 = document.getElementById("think1");
let think2 = document.getElementById("think2");

function compute()
{
    let pay = parseFloat(p.value);
    // pay = เงินเดือน
    // console.log(pay);
    // console.log(typeof(pay));
    let vat3,vat5,vat10;
    vat3 = 3/100;
    // console.log("vat3 = ",vat3);
    vat5 = 5/100;
    // console.log("vat5 = ",vat5);
    vat10 = 10/100;
    // console.log("vat10 = ",vat10);
    // console.log("pay = ",pay.toLocaleString());
  
    showsalary.innerHTML="เงินเดือน "+pay.toLocaleString()+" บาท";

    if(pay<15000)
    {
        let vpay3 = pay*vat3;
        // vpay3 = เงินเดือนหลังหักภาษี 3%
        // console.log("vat 3% = ",vpay3.toFixed(2));
        let sat3 = pay-vpay3;
        // Salary after tax = เงินเดือนหลังหักภาษี
        think.innerHTML="ภาษี ("+pay+" * 3%) = "+vpay3.toFixed(2);
        think2.innerHTML= "หักภาษี 3%";
        think1.innerHTML="เงินเดือนหลังหักภาษี "+vpay3.toFixed(2)+" - "+pay+" = "+sat3;
    }else if(pay>=15000 && pay<100000)
    {
        let vpay5 = pay*vat5;
        // vpay5 = เงินเดือนหลังหักภาษี 5%
        // console.log("vat 5% = ",vpay5.toFixed(2));
        let sat5 = pay-vpay5;
        think.innerHTML="ภาษี ("+pay+" * 5%) = "+vpay5.toFixed(2);
        think2.innerHTML= "หักภาษี 5%";
        think1.innerHTML="เงินเดือนหลังหักภาษี "+vpay5.toFixed(2)+" - "+pay+" = "+sat5;
    } else if (pay>=100000)
    {
        let vpay10 = pay*vat10;
        // vpay10 = เงินเดือนหลังหักภาษี 10%
        // console.log("vat 10% = ",vpay10.toFixed(2));
        let sat10 = pay-vpay10;
        think.innerHTML="ภาษี ("+pay+" * 10%) = "+vpay10.toFixed(2);
        think2.innerHTML= "หักภาษี 10%";
        think1.innerHTML="เงินเดือนหลังหักภาษี "+vpay10.toFixed(2)+" - "+pay+" = "+sat10;
    }
}
function Reset()
{
    p.value="";
    showsalary.innerHTML="";
    think.innerHTML="";
    think1.innerHTML="";
    think2.innerHTML="";
}