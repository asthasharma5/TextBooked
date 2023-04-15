import React, { useState } from "react";
import "./styles/UserForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PDFViewer from "./PDFViewer";

function UserForm() {
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    title: "",
    author: "",
    publishedDate: "",
    description: "",
    Image: "",
    price: "",
    rent: "",
    buy: "",
  });
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [isChecked, setIsChecked] = useState(false); // Initial state of checkbox

  const pdfUrl = 'https://example.com/api/getPdf';
  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
  };
  const handleChange = async (e) => {
    e.preventDefault();

    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/books", fields)
      .then((res) => console.log(res.data));
    navigate("/bookshelf");
  };
  return (
    <>
      <div className="userform-page">
        <form className="block" onSubmit={handleSubmit}>
          <h1 className="heading">User can sell here</h1>
          <input
            className="Text"
            type="text"
            placeholder="Title"
            name="title"
            value={fields.title}
            onChange={handleChange}
          />

          <input
            className="Text"
            type="text"
            placeholder="Author"
            name="author"
            value={fields.author}
            onChange={handleChange}
          />
          <input
            className="Text"
            type="text"
            placeholder="Publiser date"
            name="Publiser"
            value={fields.publishedDate}
            onChange={handleChange}
          />
          <input
            className="Text"
            type="text"
            placeholder="description"
            name="description"
            value={fields.description}
            onChange={handleChange}
          />

          <label style={{ marginLeft: "97px", marginTop: "10px" }}>
            Rent
            <input
              type="checkbox"
              value="option1"
              checked={selectedCheckbox === "option1"}
              onChange={handleCheckboxChange}
            />
          </label>
          <label style={{ marginLeft: "17px", marginTop: "10px" }}>
            Buy
            <input
              type="checkbox"
              name="buy"
              value={fields.buy}
              checked={isChecked} // Set checked status from state
              onChange={handleCheckboxChange} // Handle onChange event
            />
          </label>
          <input
            className="Text"
            accept="image/*"
            type="file"
            placeholder="Image"
            name="Image"
            value={fields.Image}
            onChange={handleChange}
          />
          {/* <PDFViewer pdfUrl={pdfUrl} /> */}
          <input
            className="Text"
            type="text"
            placeholder="price"
            value={fields.price}
            name="price"
            onChange={handleChange}
          />
          <button className="button1" type="submit">
            Submit{" "}
          </button>
          <Link to={"/bookshelf"}>
            <button className="button1">Skip</button>
          </Link>
        </form>
      </div>
    </>
  );
}
export default UserForm;
