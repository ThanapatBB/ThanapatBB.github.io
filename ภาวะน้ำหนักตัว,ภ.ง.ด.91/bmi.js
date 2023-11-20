let weight = document.getElementById("weight");
let height = document.getElementById("height");
let bmi = document.getElementById("bmi")
let bmi2 = document.getElementById("bmi2")
function ตกลง()
{
    let w = parseFloat(weight.value);
    // น้ำหนัก
    let h = parseFloat(height.value);
    // ส่วนสูง
    let m = h/100
    let BMI = w/(m*m)
    bmi.innerHTML="BMI = "+BMI.toFixed(2)
    if(BMI<18.5){
        bmi2.innerHTML="ภาวะน้ำหนักตัว = น้ำหนักต่ำกว่าเกณฑ์"
    }else if(BMI>=18.5 && BMI<=22.9){
        bmi2.innerHTML="ภาวะน้ำหนักตัว = สมส่วน"
    }else if(BMI>=23 && BMI<=24.9){
        bmi2.innerHTML="ภาวะน้ำหนักตัว = น้ำหนักเกิน"
    }else  if(BMI>=25 && BMI<=29.9){
        bmi2.innerHTML="ภาวะน้ำหนักตัว = โรคอ้วน"
    }else if(BMI>30){
        bmi2.innerHTML="ภาวะน้ำหนักตัว = โรคอ้วนอันตราย"
    }
}
function รีเซต()
{
    weight.value="";
    height.value="";
    bmi.innerHTML="";
}