
/*
Compilation phase 
1) foo ?? stack of global
2) bar ?? stack//fucntion
3) foo ?? stack of bar function
Execution Phase

*/

/*Scoping*/

var foo = 'global foo';
var nrelated = 'ab';
function bazz(foo) {
	/* body... */
	foo = '2nd local foo';
}
bazz();
console.log(foo);