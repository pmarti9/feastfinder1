// //searches for ingredients and recipes

// var axios = require("axios").default;

// var options = {
//   method: 'POST',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/classify',
//   params: {locale: 'en_us'},
//   headers: {
//     'content-type': 'application/json',
//     'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     'x-rapidapi-key': 'c70de79937mshc317ab0a1b24169p1b372djsnb72ab0810f82'
//   },
//   data: {plu_code: '', title: 'Kroger Vitamin A & D Reduced Fat 2% Milk', upc: ''}
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });