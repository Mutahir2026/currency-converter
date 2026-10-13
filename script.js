let amount=document.querySelector("#amount");
let output=document.querySelector("#output");
let from=document.querySelector("#from");
let to=document.querySelector("#to");

from.addEventListener("change",convert);
to.addEventListener("change",convert);

let conversion_val;
async function Get_Conversion_Val()
{
conversion_val=await (await fetch(from_url)).json();
console.log(conversion_val[from.value.toLowerCase()][to.value.toLowerCase()]);
}
let from_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/"+from.value.toLowerCase()+".json";
Get_Conversion_Val();
async function convert()
{
console.log("From : "+from.value);
console.log("To : "+to.value);
from_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/"+from.value.toLowerCase()+".json";
await Get_Conversion_Val();
 output.value= (amount.value*conversion_val[from.value.toLowerCase()][to.value.toLowerCase()]).toFixed(2);

}
amount.addEventListener("input",()=>{
 output.value= (amount.value*conversion_val[from.value.toLowerCase()][to.value.toLowerCase()]).toFixed(2);
 
});

