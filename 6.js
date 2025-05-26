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
import React from "react";
import SearchFilter from "./SearchFilter";
function App() {
return (
<div>
<SearchFilter />
</div>
);
}
export default App;
//SearchFilter.jsx /// create inside src folder
import React, { useState } from "react";
import jsonData from "./data.json"; // Import JSON data
function SearchFilter() {
const [searchQuery, setSearchQuery] = useState("");//Creates a state variable searchQuery to
store the text entered by the user in the search input. It's initialized as an empty string. setSearchQuery is the function
to update this state.
const [filteredItems, setFilteredItems] = useState(jsonData); // Initialize with all data
// Creates a state variable filteredItems to store the array of items that match the current search query. It's initialized with the entire
jsonData array, so initially, all items are displayed
// Function to handle search input change
const handleSearchChange = (e) => {
const query = e.target.value.toLowerCase();
setSearchQuery(query);
// Filter the items based on the search query (searching by name in this example)
const filtered = jsonData.filter((item) =>
item.name.toLowerCase().includes(query)
);
setFilteredItems(filtered);
};
return (
<div>
<h2>Search Filter</h2>
<input
type="text"
placeholder="Search..."
value={searchQuery}
onChange={handleSearchChange}
/>
<ul>
{filteredItems.map((item, index) => (
<li key={index}>
{item.name} ({item.category}) {/* Accessing object properties */}
</li>
))}
{filteredItems.length === 0 && searchQuery && <p>No items found matching your
search.</p>}
</ul>
</div>
);
}
export default SearchFilter;
data.json // create inside src folder
[
{ "name": "Banana", "category": "Fruit" },
{ "name": "Carrot", "category": "Vegetable" },
{ "name": "Beans", "category": "Vegetable" },
{ "name": "Brinjal", "category": "Vegetable" },
{ "name": "Pineapple", "category": "Fruit" }
]
