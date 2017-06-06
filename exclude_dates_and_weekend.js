var excludeArray = ["2017-06-07","2017-06-08" ,"2017-06-09"];
var includeArray = ["2017-06-04"];              
checkDate = function(date){
  if($.inArray($.datepicker.formatDate('yy-mm-dd', date ), excludeArray) > -1){
    return [false]
  }else if($.inArray($.datepicker.formatDate('yy-mm-dd', date ), includeArray) > -1){
    return [true]
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
