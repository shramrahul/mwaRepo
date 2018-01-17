function isWeekend() {
	const todayDate = new Date();
  	const day = todayDate.getDay();

  	let daysArr = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend']
    return daysArr[day];
}

console.log(isWeekend());