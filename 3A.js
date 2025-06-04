const http = require("http"); 
// Create a server
const server = http.createServer((req, res) => 
{
const headers = req.headers; // Get request headers
console.log(headers, ".....");
 // Check if 'cookie' header exists
 if (headers.cookie)
 {
console.log("Cookies:", headers.cookie);
 } 
else 
{
console.log("No cookies found in the request header.");
}
 res.end("Check console for cookies information.");
});
// Listen on port 3000
server.listen(3000, ( ) => 
{
 console.log("Server running at http://localhost:3000/");
});
