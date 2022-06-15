//displays current date and time using moment.js
var currentDay = $("#currentDay")
currentDay.text(moment().format('MMMM Do YYYY'));
var currentHour =  moment().hour()
console.log(currentHour)


$(".time-block").each(function () {
//gets the value saved in local storage 
  var blockHour = $(this).attr("id");
  //console.log(blockHour.split("-")[1])
  console.log(blockHour.split("hour-")[1])
  var key = localStorage.getItem(blockHour);
  var value = $(this).children(".description");
  value.val(key);
  //color will change depending on time
  if (blockHour.split("hour-")[1] < currentHour){
    $(this).addClass("past")

   }else if (blockHour.split("hour-")[1] == currentHour){
     $(this).addClass("present")

   }else {
     $(this).addClass("future") 
  }
console.log(this)
});
//the activity will save in  localstorage 
$(".saveBtn").on("click", function () {
  console.log(this)
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text)


}); 


//ad one for each timeblock
// $("#hour-9 textarea" ).val(localStorage.getItem("hour-9"))