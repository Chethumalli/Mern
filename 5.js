//Client side
//index.js
import React from 'react'; // Imports the React library.
import ReactDOM from 'react-dom/client'; // Imports the ReactDOM library, which provides methods to
interact with the browser's DOM.
import './index.css'; // Imports CSS for styling
import App from './App'; // Imports the main component of your application, App.js
import reportWebVitals from './reportWebVitals'; // Imports a function for measuring performance
const root = ReactDOM.createRoot(document.getElementById('root')); // Creates a root for
the React application to render into. It finds the HTML element with the ID 'root'
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
//App.js
import React, { useState } from "react";
import axios from "axios";
function App() {
const [name, setName] = useState(""); // Creates a state variable name to store the fruit name,
initialized as an empty string. setName is the function to update this state.
const [price, setPrice] = useState("");
const url = "http://localhost:5000"; // Defines the URL of your Node.js server.
const handleSubmit = async (e) => {
e.preventDefault(); // Prevents the default browser form submission, which would cause a page
reload.
try {
await axios.post(`${url}/api/fruits`, { name, price });
console.log("Data sent successfully");
// Optionally, you can reset the form fields here
} catch (error) {
console.error("Error sending data:", error);
}
};
return (
<div>
<h1>Fruit Data Form</h1>
<form onSubmit={handleSubmit}>
<label> Fruit Name: <input type="text" value={name} onChange={(e) =>
setName(e.target.value)}
/>
</label>
<br />
<label> Price: <input type="text" value={price} onChange={(e) =>
setPrice(e.target.value)}
/>
</label>
<br />
<button type="submit">Submit</button>
</form>
</div>
);
}
export default App;
//server side –>file named as server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());
// Handle POST request to '/api/fruits'
app.post("/api/fruits", (req, res) => {
const { name, price } = req.body;
console.log(`Received data from client: Name - ${name}, Price - ${price}`);
res.status(200).send("Data received successfully");
});
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
