var fullname = "dfd";

var obj = {

fullname : 'Chris Orange',
prop: {
	fullname : 'Sphen',

getFUllname: function(){
	return this.fullname;
}
}

};
var test = obj.prop.getFUllname;
console.log(test());