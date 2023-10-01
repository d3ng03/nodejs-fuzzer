const dotprop = require('dot-prop');

const myObject = {
  user: {
   name: 'John',
   address: {
     city: 'New York',
     postalCode: '10001',
    },
  },
};


module.exports.fuzz = function(buf){
	try{
		//console.log(buf);
		dotprop.set(myObject, buf.toString(), 'FUZZ');
	} catch(e){
		//if(e.message.indexOf('ParseDictionaryFile') !== -1){
		//}else{
		//	throw(e);
		//}
	}
}
