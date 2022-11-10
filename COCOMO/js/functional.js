$('.firstgroup input[name="1"]').on("click", function() {

    $('.firstgroup input[name="1"]').removeAttr("checked"); 
    $(this).prop("checked", true); 

});
$('.secondgroup input[name="2"]').on("click", function() {

    $('.secondgroup input[name="2"]').removeAttr("checked"); 
    $(this).prop("checked", true); 

});
$('.thirdgroup input[name="3"').on("click", function() {

    $('.thirdgroup input[name="3"]').removeAttr("checked"); 
    $(this).prop("checked", true); 

});
$('.fourthgroup input[name="4"]').on("click", function() {

    $('.fourthgroup input[name="4"]').removeAttr("checked"); 
    $(this).prop("checked", true); 

});
$('.fifthgroup input[name="5"]').on("click", function() {

    $('.fifthgroup input[name="5"]').removeAttr("checked"); 
    $(this).prop("checked", true); 

});

document.querySelector("button").onclick=function(){
let r_1=document.querySelector('input[name="1"]:checked').value;
let r_2=document.querySelector('input[name="2"]:checked').value;
let r_3=document.querySelector('input[name="3"]:checked').value;
let r_4=document.querySelector('input[name="4"]:checked').value;
let r_5=document.querySelector('input[name="5"]:checked').value;
let i_1=document.querySelector('input[name="firstinput"]').value;
let i_2=document.querySelector('input[name="secondinput"]').value;
let i_3=document.querySelector('input[name="thirdinput"]').value;
let i_4=document.querySelector('input[name="fourthinput"]').value;
let i_5=document.querySelector('input[name="fifthinput"]').value;

let s_1=Number(document.getElementById('1').value);
let s_2=Number(document.getElementById('2').value);
let s_3=Number(document.getElementById('3').value);
let s_4=Number(document.getElementById('4').value);
let s_5=Number(document.getElementById('5').value);
let s_6=Number(document.getElementById('6').value);
let s_7=Number(document.getElementById('7').value);
let s_8=Number(document.getElementById('8').value);
let s_9=Number(document.getElementById('9').value);
let s_10=Number(document.getElementById('10').value);
let s_11=Number(document.getElementById('11').value);
let s_12=Number(document.getElementById('12').value);
let s_13=Number(document.getElementById('13').value);
let s_14=Number(document.getElementById('14').value);
let s_main=document.getElementById('main').value;
let TDI=s_1+s_2+s_3+s_4+s_5+s_6+s_7+s_8+s_9+s_10+s_11+s_12+s_13+s_14;
let VAF=0.65+(0.01*TDI);
let ADP=((VAF*i_1*r_1)+(VAF*i_2*r_2)+(VAF*i_3*r_3)+(VAF*i_4*r_4)+(VAF*i_5*r_5));
let LOC=document.querySelector('.outputT');
console.log(TDI);
console.log(VAF);
console.log(ADP);
document.querySelector('.outputF').value= VAF;
document.querySelector('.outputS').value= ADP ;

// console.log(s_1 + '; ' + s_2 + '; ' + s_3 +'; '+ s_4 +'; ' + s_5 + '; ' + s_6 +'; ' + s_7 + '; '+ s_8 + '; ' + s_9 + '; ' + s_10 + '; '+ s_11 +'; ' + s_12 +'; ' + s_13 +'; ' + s_14);

switch (s_main){
  case "1":
    LOC.value=ADP*128;
    break;
  case "2":
    LOC.value=ADP*107;
    break; 
  case "3":
    LOC.value=ADP*80;
      break; 
  case "4":
    LOC.value=ADP*58;  
     break;
  case "5":
    LOC.value=ADP*56;
    break;
  case "6":
    LOC.value=ADP*55;
    break;
  case "7":
    LOC.value=ADP*54;
    break;
  case "8":
    LOC.value=ADP*53;
    break;
  case "9":
    LOC.value=ADP*50;
    break;
  case "10":
    LOC.value=ADP*40; 
    break;
  case "11":
    LOC.value=ADP*38;
    break;
  case "12":
    LOC.value=ADP*38;
    break;
  case "13":
    LOC.value=ADP*35;
    break;
  case "14":
    LOC.value=ADP*34;
      break;
  case "15":
    LOC.value=ADP*29;
    break;
  case "16":
    LOC.value=ADP*29;
    break;
  case "17":
    LOC.value=ADP*28;
    break;
  case "18":
    LOC.value=ADP*20;
    break;
  case "19":
    LOC.value=ADP*15;
    break;
  case "20":
    LOC.value=ADP*13;
    break;
  case "21":
    LOC.value=ADP*11;
    break;
  case "22":
    LOC.value=ADP*6;
    break;            
    default:
      console.log('Nothing choosed');                       
}
}

