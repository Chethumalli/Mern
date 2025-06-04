Student.js
const { MongoClient } = require('mongodb'); 
const uri = 'mongodb://127.0.0.1:27017'; // Replace with your MongoDB URI
async function main() {
 const client = new MongoClient(uri);
 try {
 await client.connect();
 const db = client.db('studentdb'); // Your database name
 const students = db.collection('students');
// Example student data
const student= [
 { usn: '4JK23AI001', name: 'Alice', sem: 4, year_of_admission: 2023 },
 { usn: '4JK24AI005', name: 'Jane', sem: 2, year_of_admission: 2024 }
 ];
 // Insert the student document
 const result = await students.insertMany(student);
 console.log(`Inserted ${result.insertedCount} students with ids: ${Object.values (result.insertedIds)}`);
 } catch(error) {
console.error("Error inserting data:", error); // Added error handling 
} finally 
{ 
await client.close(); 
} 
} main().catch(console.error);
