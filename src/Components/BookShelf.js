import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./styles/BookShelf.css";

import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function BookShelf() {
  const [books, setBooks] = useState([]);
  const [sortValue, setSortValue] = useState("");
  console.log("books", books);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState("");

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };
  const handleCollegeSelect = (e) => {
    setSelectedCollege(e.target.value);
    
  };

  console.log("hfds",selectedCollege)

  const handleSort = async (e) => {
    let value = e.target.value;
    return await axios
      .get(`http://localhost:5001/books?_filter*=${value}`) //sort order in ascending

      .then((res) => {
        setBooks(res.data);
      })

      .catch((err) => console.log(err));
  };
  handleSort()
  useEffect(() => {
    axios.get("http://localhost:5001/books").then((res) => setBooks(res.data));

    //setBooks(result)
  }, []);

  return (
    <div className="book-list-container">
      <Link to={"/userform"}>
        <BsFillArrowLeftCircleFill
          style={{ color: "green", fontSize: "38px", marginTop: "10px" }}
        />
      </Link>

      <span>
        <h2 className="heading">Book List</h2>
      </span>
      <div>
        <select className="block2" onChange={handleCollegeSelect}>
          {" "}
          <option>Select College</option>{" "}
          {books.map((item, index) => (
            <option value={item.college} key={index}>
              {" "}
              {item.college}{" "}
            </option>
          ))}{" "}
        </select>

        <select className="block2">
          <option>Select Year</option>
          {books.map((item, index) => (
            <option value={item.id} key={index}>
              {item.Year}
            </option>
          ))}
        </select>

        <select className="block2">
          <option>Select Subject</option>
          {books.map((item, index) => (
            <option value={item.id} key={index}>
              {item.Subject}
            </option>
          ))}
        </select>
        <select className="block2">
          <option>Select Branch</option>
          {books.map((item, index) => (
            <option value={item.id} key={index}>
              {item.Branch}
            </option>
          ))}
        </select>
      </div>
  {selectedCollege.length >=2 ? <div className="book-list">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <img src={book?.coverImageUrl} alt={book.title} />
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.publishedDate}</p>
              <div className="book-price-container">
                <p className="book-price">${book.price}</p>
                <button className="buy-button buttonn">Buy Now</button>
              </div>
              <motion.p
                initial={{ height: 0 }}
                animate={{ height: book.selected ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="book-description"
              ></motion.p>
              <Link to={`/detail/${book.id}`}>
                <button
                  className="expand-button buttonn"
                  onClick={() => setSelectedBook(book.id)}
                >
                  {book.selected ? "Hide Details" : "View Details"}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>: ""}
    </div>
  );
}

export default BookShelf;
