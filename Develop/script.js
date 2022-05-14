// display current day on top of calendar
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// have time blocks displayed
// color code the days whether it is in the past, present, or future
// when clicking into time block, can enter an event.
// saved in local storage