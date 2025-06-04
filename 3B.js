// Define a car object
const car = {
 make: 'Toyota',
 model: 'Fortuner',
 year: 2025,
color: 'black'
};
// Print the properties of the car object
console.log('Original car object:');
for (const property in car) 
{
 console.log(`${property}: ${car[property]}`);
}
// Delete the second property
const secondProperty = Object.keys(car)[1];
delete car[secondProperty];
console.log('\nCar object after deleting the second property:');
for (const property in car) 
{
 console.log(`${property}: ${car[property]}`);
}
// Get the length of the object
const length = Object.keys(car).length;
console.log(`\nLength of the car object after deleting the second property: ${length}`);
