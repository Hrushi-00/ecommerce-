import { useState, useEffect } from "react";
import Shimmer from "./pages/Shimmer";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductList = ({ data }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=20&page=${pageNumber}`
      );
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!data) {
      // If data prop is not provided, fetch data for the initial page
      fetchData(page);
    } else {
      // If data prop is provided, use it directly
      setProducts(data);
      setLoading(false);
    }
  }, [data, page]);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // User has scrolled to the bottom, load more products
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return !products.length ? (
    <Shimmer />
  ) : (
    <div className="product-container">
      {products.map((item) => (
        <div key={item.id} className="product-normal">
          <div className="product-header">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-details">
            <h4 className="item-details">{item.title}</h4>
            <p className="item-price">{item.price}</p>
            <button className="btn" onClick={() => handleAddItem(item)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
