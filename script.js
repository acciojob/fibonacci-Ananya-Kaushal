function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	if(num==1)return a;
	else if(num==2)return b;
	else
	{
		let p=fibonacci(num-2)+fibonacci(num-3);
		return p;
	}
	
}

module.exports = fibonacci;
