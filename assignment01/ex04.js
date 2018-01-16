const item = {
  "name": "Biscuits",
  "type": "regular",
  "category": "food",
  "price": 2.0
}

const applyCoupon = cat => dis => obj => {
	obj.price =  obj.price - (obj.price*dis);
  	return obj;
}

console.log(applyCoupon("food")(0.1)(item).price);