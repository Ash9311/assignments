/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
<<<<<<< HEAD
  Transaction - an object like { itemName, category, price, timestamp }.  [{"category": "Food", "totalSpent": 10}]     
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
=======
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
>>>>>>> ae39c3e25a755ce8724b7d860ca3447ca547c4dc
*/
let transaction = [
  {itemName:'apple',category:'fruit',price:'200'},
  {itemName:'banana',category:'fruit',price:'100'},
  {itemName:'pen',category:'stationary',price:'20'},
  {itemName:'paper',category:'fruit',price:'10'},
  ,{itemName:'mango',category:'fruit',price:'150'}
]
calculateTotalSpentByCategory(transaction);
function calculateTotalSpentByCategory(transactions) {
  const categoryGroup = {};
  transactions.forEach(transaction=>{
    const {category,price} = transaction;
    categoryGroup[category]=(categoryGroup[category]||0) + Number(price); // '||' is used bcz when on first iteration v get current value as null before assigning
  })
//format ans as per test cases
  let result = [];
  for(let category in categoryGroup){
    result.push({"category":category,"totalSpent":categoryGroup[category]});
  }
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
