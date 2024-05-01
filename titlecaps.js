//Convert all the strings to title caps in a string array
//using anonymous function
var str = ['cAt','doG','Fox','lion','tIgEr'];
let title = function (str) {
	
	for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
}

title(str);

//using IIFE
var str1 = ['Kiwi','applE','ORange','baNAna'];

(function (){
	for (var i = 0; i < str1.length; i++) {
	     str1[i] = str1[i].toLowerCase();
		str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
	}
	console.log(str1.join(' '));
})(str1);


//using arrow function
var str2 = ['CRow','PArrot','SparroW','SWAN']
var caps = str2.map((item) => {
	
		return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
	});
	console.log(caps.join(' '));




