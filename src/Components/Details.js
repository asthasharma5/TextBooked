import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./styles/Detail.css";
import Carousel from 'react-bootstrap/Carousel';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log("daaaa", data);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/books/${id}`)
      .then((res) => setData(res.data));
  }, [id]);
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
         style={{height:"300px"}}
          src="https://images.theconversation.com/files/82317/original/image-20150520-30566-1ozjww6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"300px"}}
          className="d-block w-100"
          src="https://images.theconversation.com/files/82317/original/image-20150520-30566-1ozjww6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"300px"}}
          className="d-block w-100"
          src="https://images.theconversation.com/files/82317/original/image-20150520-30566-1ozjww6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Link to={'/bookshelf'}><BsFillArrowLeftCircleFill style={{color: "green",fontSize: "38px",marginTop: "10px"}}/></Link>
    
      <h1 >Details page</h1>
      <div>
        <h5 className="subheading">
          Title :<span style={{ fontWeight: "300" }}> {data.title}</span>{" "}
        </h5>
        <h5 className="subheading">
          {" "}
          author : <span style={{ fontWeight: "300" }}> {data.author}</span>
        </h5>
        <h5 className="subheading">
          {" "}
          publishedDate :{" "}
          <span style={{ fontWeight: "300" }}>{data.publishedDate}</span>
        </h5>
        <h5 className="subheading">
          description:
          <span style={{ fontWeight: "300" }}>{data.description}</span>{" "}
        </h5>
        <h5 className="subheading">
          college : <span style={{ fontWeight: "300" }}>{data.college}</span>
        </h5>
        <h5 className="subheading">
          Branch : <span style={{ fontWeight: "300" }}>{data.Branch}</span>
        </h5>
        <h5 className="subheading">
          Year : <span style={{ fontWeight: "300" }}>{data.Year}</span>
        </h5>
        <h5 className="subheading">
          Subject :<span style={{ fontWeight: "300" }}>{data.Subject}</span>{" "}
        </h5>
      </div>
    </div>
  );
}
export default Details;
