$(document).foundation()

var currentVal = 134.40;
var goalVal = 27500.00
var remain = goalVal - currentVal;
var percentage = (currentVal/goalVal) * 100

var current = new Vue({
    el: '#currentAmt',
    data: {
      current: currentVal.toFixed(2).toString()
    }
  })

  var endGoal = new Vue({
      el:'#endAmt',
      data:{
          goal: goalVal.toFixed(2).toString(),

      }
  })

//   var remainingAmt = new Vue({
//     el:'#remainingAmt',
//     data:{
   
//     }
// })

  var val = 50;

  var statusBar = new Vue({
    el:'#bar',
    data:{
        status: percentage.toFixed(2).toString() + "%",
        remain: remain.toFixed(2).toString()
    }
})
var statusBar = document.querySelector(".progress-meter");
statusBar.style.width = percentage.toString() + "%";

var amountInput = document.querySelector(".amountInput");
var addButton = document.querySelector(".add");
var subtractButton = document.querySelector(".subtract");



addButton.addEventListener('click', add() )

function add(){
   console.log(amountInput.value)
}