student.js
const { MongoClient } = require('mongodb');
async function searchStudentsByName(partialName) {
 const uri = 'mongodb://127.0.0.1:27017';
 const client = new MongoClient(uri);
 try {
 await client.connect();
 const database = client.db('studentdb');
 const students = database.collection('students');
 // Create a regex for partial, case-insensitive match-Al or aL or al all are same
 const query = { name: { $regex: partialName, $options: 'i' } };
 const cursor = students.find(query);
 const results = await cursor.toArray();
 console.log(`Found ${results.length} students matching '${partialName}':`);
 results.forEach(student => console.log(student));
 } finally {
 await client.close();
 }
}
// Example usage:
searchStudentsByName('Al');
