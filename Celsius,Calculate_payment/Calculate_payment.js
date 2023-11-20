let จำนวนน้ำแร่ = document.getElementById("จำนวนน้ำแร่");
// console.log(จำนวนน้ำแร่);
// console.log(typeof(จำนวนน้ำแร่))
let x = document.getElementById("ราคาน้ำแร่");
let จำนวนเงินจ่าย = document.getElementById("จำนวนเงินจ่าย");
let เงื่อนไข = document.getElementById("เงื่อนไข");


function ตกลง()
{
    let ราคาต่อขวด1 = 10
    let ราคาต่อขวด = parseFloat(ราคาต่อขวด1)
    let ขวด = parseFloat(จำนวนน้ำแร่.value);
    // console.log(typeof(ขวด))
    // console.log("ขวด = ",ขวด);
    let ราคาน้ำแร่ = (ขวด*ราคาต่อขวด);
    // console.log("ราคาน้ำแร่ = ",ราคาน้ำแร่);
    let vat = (7/100);
    // console.log("vat = ",vat);
    let ภาษีมูลค่าเพิ่ม = (ราคาน้ำแร่*(vat));
    // console.log("ภาษีมูลค่าเพิ่ม = ",ภาษีมูลค่าเพิ่ม);
    let ราคาน้ำแร่สุทธิ = (ราคาน้ำแร่+ภาษีมูลค่าเพิ่ม);
    // console.log("ราคาน้ำแร่สุทธิ  = ",ราคาน้ำแร่สุทธิ);
    let โหลทศนิยม = ขวด/12
    let โหล = parseInt(โหลทศนิยม)
    // console.log(typeof(โหล))
    // console.log("โหล = ",โหล)
    let ราคาโหล = โหล*100
    // console.log("คิดราคาเป็นโหล",คิดราคาเป็นโหล);
    let ส่วนต่างโหล = ((ขวด-(โหล*12))*ราคาต่อขวด)
    // console.log("ส่วนต่างโหล = ",ส่วนต่างโหล)
    let คิดภาษี = (ราคาโหล+ส่วนต่างโหล)*vat
    let จำนวนเงินจ่ายสุทธิ = (ราคาโหล+ส่วนต่างโหล)+คิดภาษี
    if (ขวด >= 12)
    {
        console.log("เข้าเงื่อนไข");
        console.log("ขวด = ",ขวด);
        console.log("โหล = ",โหล);
        // console.log(typeof(โหล))
        console.log("ราคาโหล = ",ราคาโหล);
        console.log("ส่วนต่างโหล = ",ส่วนต่างโหล);
        console.log("คิดภาษี = ",คิดภาษี);
        console.log("จำนวนเงินจ่ายสุทธิ = ",จำนวนเงินจ่ายสุทธิ);
        เงื่อนไข.innerHTML = "ได้รับเงื่อนไข";
        x.innerHTML = "ราคาน้ำแร่ = "+(ราคาโหล+ส่วนต่างโหล);
        จำนวนเงินจ่าย.innerHTML = "จำนวนเงินจ่าย = "+จำนวนเงินจ่ายสุทธิ;
    } else 
    {
        console.log("ไม่เข้าเงื่อนไง");
        console.log("ขวด = ",ขวด);
        console.log("ราคาน้ำแร่ = ",ราคาน้ำแร่);
        console.log("ภาษีมูลค่าเพิ่ม = ",ภาษีมูลค่าเพิ่ม);
        console.log("ราคาน้ำแร่สุทธิ  = ",ราคาน้ำแร่สุทธิ);
        เงื่อนไข.innerHTML = "ไม่ได้รับเงื่อนไข";
        x.innerHTML = "ราคาน้ำแร่ = "+ราคาน้ำแร่;
        จำนวนเงินจ่าย.innerHTML = "จำนวนเงินจ่าย = "+ราคาน้ำแร่สุทธิ;
    }

}
function เริ่มใหม่()
{
    จำนวนน้ำแร่.value  = "";
    x.innerHTML = "";
    จำนวนเงินจ่าย.innerHTML = "";
    เงื่อนไข.innerHTML = "";
}