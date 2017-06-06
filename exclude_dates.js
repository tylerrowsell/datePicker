var array = ["2017-06-07","2017-06-08" ,"2017-06-09"];
checkDate = function(date){
  if($.inArray($.datepicker.formatDate('yy-mm-dd', date ), array) > -1){
   return [false]
  }else{
   var day = date.getDay();
    if(day == 0 || day == 6){
     return [false]
    }else{
      return [true]
    }
  }
}

$('#date').datepicker({
  beforeShowDay: checkDate,
});
