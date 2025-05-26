//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
//App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
function DataCollector() {
const [data, setData] = useState([]);
useEffect(() => {
fetchData();
}, []);
const fetchData = async () => {
try {
const response = await axios.get(
"https://dummy.restapiexample.com/api/v1/employees"
);
setData(response.data.data);
} catch (error) {
console.error("Error fetching data:", error);
}
};
return (
<div>
<h2>Data Collection</h2>
<button onClick={fetchData}>Fetch Data</button>
<ul>
{data.map((item, index) => (
<li key={index}>{item.employee_name}</li>
))}
</ul>
</div>
);
}
export default DataCollector;
