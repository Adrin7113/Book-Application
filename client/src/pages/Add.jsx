import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Enter a title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Enter a description"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Enter the price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Enter the cover URL"
        onChange={handleChange}
        name="cover"
      />
      <button className="add-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default Add;
