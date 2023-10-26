/*Fill your code */
const fav = {
  "Chocolate": 300,
  "Strawberry": 100,
  "Butterscotch":200,
  "Vannila":250,
  "Redvelvet": 350
};

let selectedArr = [];
function totalprice(arr){
let total=0;
  
  for(var i =0 ;i<arr.length;i++){
    console.log(arr);
    total += fav[arr[i]];
  }
  var totalbill = document.getElementById("total");
  document.getElementById("total").innerHTML = `Total: ₹${total}`;
  console.log(total);
  
}

 function chocoBtn(){
  var Chocolate = document.getElementById("layer1");
  var Chocobill = document.getElementById("chocolate");
  
  if(Chocolate.style.display==="none"){
    Chocolate.style.display="block";
    Chocobill.style.display = 'block';
    selectedArr.push("Chocolate");
  }
  else{
    Chocolate.style.display="none";
    Chocobill.style.display = 'none';
    selectedArr.pop("Chocolate");

  }
  totalprice(selectedArr);
}
      
function strawBtn(){
  let Strawberry  = document.getElementById("layer2");
  var Strawberrybill = document.getElementById("strawberry");
  if(Strawberry.style.display==="none"){
    Strawberry.style.display="block";
    Strawberrybill.style.display = 'block';
    selectedArr.push("Strawberry");
  }
  else{
    Strawberry.style.display="none";
    Strawberrybill.style.display = 'none';
    selectedArr.pop("Strawberry");

  }
  totalprice(selectedArr);
}
function butterBtn(){
  let Butterscotch = document.getElementById("layer3");
  var Butterscotchbill = document.getElementById("butterscotch");
  if(Butterscotch.style.display==="none"){
    Butterscotch.style.display="block";
    Butterscotchbill.style.display="block";
    selectedArr.push("Butterscotch");
  }
  else{
    Butterscotch.style.display="none";
    Butterscotchbill.style.display="none";
    selectedArr.pop("Butterscotch");
  }
  totalprice(selectedArr);
}
function vannilBtn(){
  let Vannila = document.getElementById("layer4");
  var vannilabill = document.getElementById("vannila");
  if(Vannila.style.display==="none"){
    Vannila.style.display="block";
    vannilabill.style.display="block";
    selectedArr.push("Vannila");
  }
  else{
    Vannila.style.display="none";
    vannilabill.style.display="none";
    selectedArr.pop("Vannila");
  }
  totalprice(selectedArr);
}
function redvelBtn(){
  let Redvelvet = document.getElementById("layer5");
  var redvelvetbill = document.getElementById("redvelvet");
  if(Redvelvet.style.display==="none"){
    Redvelvet.style.display="block";
    redvelvetbill.style.display="block";
    selectedArr.push("Redvelvet");
  }
  else{
    Redvelvet.style.display="none";
    redvelvetbill.style.display="none";
    selectedArr.pop("Redvelvet");
  }
  totalprice(selectedArr);
}
function buyBtn(){
  let candle = document.getElementById("candle");
  window.alert("Happy Birthday!");
  console.log(candle);
  
  if(candle.style.display==="none"){
    candle.style.display="block";
    }
  else{
   candle.style.display="none";
    }

}




//[{flavour:"vannila",price:300},{}]
  
 // const button= document.getElementsByClassName("buttons");
  //let purchase=[{flavour:"Chocolate", price:300},{flavour:"Strawberry",price:"100"},{flavour:"Butterscotch",price:"200"},{flavour:"Vannila",price:"250"},{flavour:"Redvelvet",price:"350"}];
  // function calculate(){
   
   //if(flavour.Chocolate){
   // total += price.Chocolate;
 // }
  //  else {
    //  total -= price.Chocolate;
   //}
   //if(flavour=="Strawberry"){
    //if(price == "100")
    //total += price;
  //}
   // else {
     // total -= price;
   //}
   
 // document.getElementById("total").innerHTML = `Total: ₹${total}`;

 // }
  //calculate();
  

// for (let i = 0; i < buttons.length; i++) {
//   if (i == 0) {
//     button[i].flavour==flav
//     total += parseInt(buttons[i].price);
//   }
//   if (i == 1) {
//     total += parseInt(buttons[i].Strawberry);
//   }
//   if (i == 2) {
//     total += parseInt(buttons[i].Butterscotch);
//   }
//   if (i == 3) {
//     total += parseInt(buttons[i].Vannila);
//   }
//   if (i == 4) {
//     total += parseInt(buttons[i].Redvelvet);
//   }
// }
//   const result = document.getElementById('total');
//   console.log(resultElement)
//   resultElement.innerHTML = total;

   
  
  
  
  
  





