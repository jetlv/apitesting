// var apiAccessLink = "http://192.168.11.16:8080/app/o2o/products/getProducts.htm?pcs.categoryId=8729&pcs.languageCode=fr-fr&pcs.propertyArray=100526,529@priceRange,0:50&pcs.websiteId=8";

// var level1 = apiAccessLink.split('/')[4];
// var level2 = apiAccessLink.split('/')[5];
// var fileName = apiAccessLink.split('/')[6].split('?')[0].match(/\w+/)[0];

// console.log(level2);
// console.log(fileName);

// console.log(apiAccessLink.replace(/192.*\/app/, 'app.milanoo.com/app'));

// var url = "http://192.168.11.16:8080/app/pushMessage/updateToken.htm?mt.token=3fdfedg2qfdfewtesdf&mt.lang=en-uk&mt.tokenType=0";

// var path = url.match(/8080\/.*\.htm/)[0];

// var arr = path.match(/[A-Za-z]+/g);
// console.log(arr);

var md5 = require('md5');

var str = 'password=abc&username=def&nyxKey=key';

console.log(md5(str).toUpperCase());