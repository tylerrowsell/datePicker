//Exclude These Dates from Weekend
var dateExceptions = ["14/05/2017", "13/05/2017"];
$(document).ready( function() {
  $(function() {
    $("#date").datepicker( {
      dateFormat: 'dd/mm/yy',
      minDate: 0,
      maxDate: '+2M',
      beforeShowDay: function(date) {
        //check if currentDate is part of dateExceptions
        var show = false;
        for(i=0;i<dateExceptions.length;i++){
          var f = new Date(dateExceptions[i].split("/")[2], (dateExceptions[i].split("/")[1]-1), dateExceptions[i].split("/")[0]);
          if (date.getMonth() == f.getMonth() && date.getYear() == f.getYear() && date.getDate() == f.getDate()){
            show = true;
          }
        }
        // remove weekends (day 0/6) if date isn't excluded.
        day = date.getDay();
        if ( day == 0 || day == 6 ) {
          if(show){
          return [true, ""]
          }else{
          return [false, ""]            
          }
        } else {
          return [true, ""]
        }
      }
    } );
  });
});
