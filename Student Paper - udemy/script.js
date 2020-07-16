console.log('starting script.js');

window.onload=init;


function init(){
  var today=new Date(); // today Date

  var todayElem=document.querySelector('#today');
  todayElem.setAttribute('value',today.toDateString());//toDateString return "D M d yyyy", for example: "Thu Apr 14 2016"
}