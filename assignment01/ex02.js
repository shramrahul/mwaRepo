String.prototype.filterWords = function(data) {
  let q = this.toString();
  for(let i in data) {
  	q = q.replace(data[i], "***");
  }
  return q;
}

console.log("This house is nice!".filterWords(['house', 'nice']));