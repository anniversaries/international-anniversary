function getAnniversaryForDayOfMonth(dayAndMonth) {

  return registeredAnniversaries[dayAndMonth] !== undefined ? registeredAnniversaries[dayAndMonth] : 'Nothing special today :-)';
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {

  var objToday = new Date(),
      dayOfMonth = objToday.getDate(),
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      curMonth = months[objToday.getMonth()]
 ;

  renderStatus(getAnniversaryForDayOfMonth(curMonth+' '+dayOfMonth));
  // renderStatus(getAnniversaryForDayOfMonth('January 26'));

});