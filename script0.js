$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //console.log("new appt:\n", time,"\n" +value)
    // save in localStorage
    localStorage.setItem(time, value);
  });
  // get current number of hours
  var currentHour = moment().hours();
  console.log(currentHour);

  //Delete Items
  $(".trashBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // delete from localStorage
    localStorage.removeItem(time, value);
  });

  // |||||||||||||||||||||| [ALL HOUR BLOCKS] |||||||||||||||||||||||||||| //
  //========================= RED HOUR BLOCKS ============================//

  //========================= {Workday Start} ============================//
  //========================= {[(9AM)]} ============================//
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  //
  if (currentHour == 9) {
    var present = $("#hour-9");
    present.addClass("present")
  }

  //
  //========================= {[(9AM)]} ============================//
  //
  //========================= {[(10AM)]} ============================//
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  //
  if (currentHour == 10) {
    var present = $("#hour-10");
    present.addClass("present")
    var past = $("#hour9")
    past.addClass("past")
  }
  //
  //========================= {[(10AM)]} ============================//
  //
  //========================= {[(11AM)]} ============================//
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  //
  if (currentHour == 11) {
    var present = $("#hour-11");
    present.addClass("present")
    var past = $("#hour9")
    var past1 = $("#hour10")
    past.addClass("past")
  }
  //========================= {[(11AM)]} ============================//
  //
  //========================= {[(12PM)]} ============================//
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  //
  if (currentHour == 12) {
    var present = $("#hour-12");
    present.addClass("present")
  }
  //========================= {[(12PM)]} ============================//
  //
  //========================= {[(1PM)]} ============================//
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  //
  if (currentHour == 13) {
    var present = $("#hour-13");
    present.addClass("present")
  }
  //========================= {[(1PM)]} ============================//
  //
  //========================= {[(2PM)]} ============================//
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  //
  if (currentHour == 14) {
    var present = $("#hour-14");
    present.addClass("present")
    //========================= {[(2PM)]} ============================//
    //
    //========================= {[(3PM)]} ============================//
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    //
    if (currentHour == 15) {
      var present = $("#hour-15");
      present.addClass("present")
      //========================= {[(3PM)]} ============================//
      //
      //========================= {[(4PM)]} ============================//
      $("#hour-16 .description").val(localStorage.getItem("hour-16"));
      //
      if (currentHour == 16) {
        var present = $("#hour-16");
        present.addClass("present")
        //========================= {[(4PM)]} ============================//
        //
        //========================= {[(5PM)]} ============================//
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
        //
        if (currentHour == 17) {
          var present = $("#hour-17");
          present.addClass("present")

        }
        //========================= {[(5PM)]} ============================//
        //========================= {Workday END} ============================//
        ///////////////////////////////////////////////////////////////////////
        /*
        //========================= {[(6PM)]} ============================//
        //
        $("#hour-18 .description").val(localStorage.getItem("hour-18"));
        //
          if (currentHour == 18 ) {
            var present = $("#hour-18");
            present.addClass("present")
        //
        //========================= {[6PM)]} ============================//
        //
        //========================= {[(7PM)]} ============================//
        $("#hour-19 .description").val(localStorage.getItem("hour-19"));
        //
          if (currentHour == 19 ) {
            var present = $("#hour-19");
            present.addClass("present")
            var past = $("#hour9")
            past.addClass("past")
        //
        //========================= {[(7PM)]} ============================//
        //
        //========================= {[(8PM)]} ============================//
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        //
          if (currentHour == 11 ) {
            var present = $("#hour-11");
            present.addClass("present")
            var past = $("#hour9")
            var past1 = $("#hour10")
            past.addClass("past")
        //========================= {[(8PM)]} ============================//
        //
        //========================= {[(9PM)]} ============================//
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        //
          if (currentHour == 12 ) {
            var present = $("#hour-12");
            present.addClass("present")
        //========================= {[(9PM)]} ============================//
        /*
        //========================= {[(1PM)]} ============================//
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        //
          if (currentHour == 13 ) {
            var present = $("#hour-13");
            present.addClass("present")
        //========================= {[(1PM)]} ============================//
        //
        //========================= {[(2PM)]} ============================//
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        //
          if (currentHour == 14 ) {
            var present = $("#hour-14");
            present.addClass("present")
        //========================= {[(2PM)]} ============================//
        //
        //========================= {[(3PM)]} ============================//
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        //
          if (currentHour == 15 ) {
            var present = $("#hour-15");
            present.addClass("present")
        //========================= {[(3PM)]} ============================//
        //
        //========================= {[(4PM)]} ============================//
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        //
          if (currentHour == 16 ) {
            var present = $("#hour-16");
            present.addClass("present")
        //========================= {[(4PM)]} ============================//
        //
        //========================= {[(5PM)]} ============================//
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
        //
          if (currentHour == 17 ) {
            var present = $("#hour-17");
            present.addClass("present")
        //========================= {[(5PM)]} ============================//
        */

        //////////////////////////////////////////////////////////////////////////
        //===========X=============X HOUR BLOCKS X===============X============//


        //DEBUG ONLY
        /*
          var present = $("#hour-9");
          alert("Time is 9 AM")
          present.addClass("present")
        */

    }});
