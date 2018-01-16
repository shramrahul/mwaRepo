function isWeekend() {
	const todayDate = new Date();
  	const day = todayDate.getDay();
  	return day === 6 || day === 0 ? 'weekend': 'weekday';
}

console.log(isWeekend());