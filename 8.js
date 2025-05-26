const express = require('express');
const app = express();
const port = 3000;
// Helper function to check prime numbers
function isPrime(num) {
 if (num <= 1) return false;
 if (num <= 3) return true;
 if (num % 2 === 0 || num % 3 === 0) return false;
 for (let i = 5; i * i <= num; i += 6) {
 if (num % i === 0 || num % (i + 2) === 0) return false;
 }
 return true;
}
// Route to find prime numbers less than 100
app.get('/find_prime_100', (req, res) => {
 const primes = [];
 for (let i = 2; i < 100; i++) {
 if (isPrime(i)) {
 primes.push(i);
 }}
 res.json({ primes });
});
// Route to find cube numbers less than 100
app.get('/find_cube_100', (req, res) => {
 const cubes = [];
 for (let i = 1; i * i * i < 100; i++) {
 cubes.push(i * i * i);
 }
 res.json({ cubes });
});
app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});
