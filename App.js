// Output must be [ 2, 3, 5, 6, 8, 'Jack', 'Queen', 'King' ]

var cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen'];

let cross_number = {"Jack": 11,"Queen": 12,"King": 13};
cards.sort((a,b)=>{
  
	let tempa_ = typeof a === 'number' ? a : cross_number[a];
	let tempb_ = typeof b === 'number' ? b : cross_number[b];
  
	if(tempa_ === tempb_) {
  	return 0
  }
  
  return tempa_ < tempb_ ? -1 :1;
  
 });

console.log(cards);
