// let usd=document.querySelector("#amount");
let from=document.querySelector("#from");
let to=document.querySelector("#to");
function convert()
{
console.log("From : "+from.value);
console.log("To : "+to.value);

}
from.addEventListener("change",convert);
to.addEventListener("change",convert);