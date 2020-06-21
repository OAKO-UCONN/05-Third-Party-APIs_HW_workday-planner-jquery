$(document).ready(function () {
    renderSchedule()


    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        console.log("new appt:\n", time, "\n" + value)
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

    function renderSchedule() {
        console.log('my schedule: ', localStorage)

        $.each(localStorage, function (key, val) {

           // console.log(key + " , " + val + "\n");


            $('#'+key+ " > textarea").text(val)
        });






    }//end renderSchedule() fct def
});//end ready()