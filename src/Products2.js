import { useEffect, useState } from "react";
import axios from "axios";
import './products.css';

function Products2() {
  const [data, setData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(""); // New state for the selected item
  const [filteredData, setFilteredData] = useState([]);

  const api = 'https://fakestoreapi.com/products';

  useEffect(() => {
    getProductlist();
  }, [cnt]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(data); // Reset the filter if the search query is empty
    } else {
      const filteredResults = data.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  }, [data, searchQuery]);

  useEffect(() => {
    // Filter products based on the selected item
    if (selectedItem) {
      const filteredResults = data.filter(product =>
        product.category.toLowerCase() === selectedItem.toLowerCase()
      );
      setFilteredData(filteredResults);
    } else {
      setFilteredData(data); // Reset the filter if no item is selected
    }
  }, [data, selectedItem]);

  const getProductlist = () => {
    axios.get(api).then((response) => {
      setData(response.data);
      setFilteredData(response.data); // Initialize filtered data with all products
    });
  }

  return (
    <>
      <p>{cnt}</p>
      <button onClick={() => setCnt(cnt + 1)}>Count</button>

      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Ensure the select box and options are correctly formatted */}
        <select
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          <option value="">All Items</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's shopping</option>
          <option value="women's clothing">Women's shopping</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="products-list">
        {filteredData.map((ele, i) => (
          <div className="card" key={i}>
            <img src={ele.image} alt={ele.title} />
            <p>{ele.title}</p>
            <p>{ele.price}</p>
            <p>{ele.category}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products2;
