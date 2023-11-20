let Fahrenheit  = document.getElementById("F");
// console.log(Fahrenheit);
// console.log(typeof(Fahrenheit));
let Ce =document.getElementById("Cx");
function Convert()
{
    let Fa = parseFloat(Fahrenheit.value);
    // console.log("Fa = ",Fa);
    // console.log(typeof(Fa));
    let Celsius = (5.0/9.0)*(Fa-32.0);
    console.log("Celsius = ",Celsius);
    Ce.innerHTML = Celsius+"° C"
}
function Reset()
{
    Fahrenheit.value = "";
    Ce.innerHTML = "Celsius (° C)";
}