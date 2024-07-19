function fibonacci(num) {
// your code here
	// let a=0;
	// let b=1;
	// if(num==1)return a;
	// else if(num==2)return b;
	// else
	// {
	// 	let p=fibonacci(num-2)+fibonacci(num-3);
	// 	return p;
	// }
	let a = 0, b = 1, c, i;
    if( num == 1)
        return a;
	
    for(i = 2; i < num; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
	
}

module.exports = fibonacci;
