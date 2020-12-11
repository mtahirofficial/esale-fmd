import React, { useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
const POST = {};

const Post = (props) => {
  const [subCategory, setSubCategory] = useState("");

  const handleCategory = (e) => {
      POST.category = e.target.innerText;
      if (POST.category !== "default") {
          let subCat = SubCategories[POST.category].map((value, key) => {
              return <ListGroupItem key={key}>{value}</ListGroupItem>;
            });
            setSubCategory(subCat)
        } else {
            setSubCategory("else")
        }
        console.log(subCategory);
  };
  const Categories = [
    "Mobiles",
    "Vehicles",
    "Property",
    "Electronics",
    "Bikes",
    "Animals",
    "Furniture",
    "Books",
    "Kids",
    "Sports",
  ];
  let mainCat = Categories.map((category, index) => {
    return (
      <ListGroupItem key={index} onClick={handleCategory}>
        {category}
      </ListGroupItem>
    );
  });

  const SubCategories = {
    Mobiles: ["Tablets", "Accessories", "Mobile Phones"],
    Vehicles: ["Cars", "Busses", "Vans", "Trucks", "Rikshaw"],
    Property: ["Land and Plots", "Houses", "Shops"],
    Electronics: [
      "Computers and Accessories",
      "TV - Video - Audio",
      "Cameras",
      "AC",
      "Fridge",
      "Washing Machines",
    ],
    Bikes: ["Motor cycles", "Bicycles"],
    Animals: ["Cats", "Dogs", "Hourses", "Birds"],
    Furniture: ["Sofa", "Chairs", "Beds", "Tables", "Mirrors"],
    Books: ["Books", "Magzines"],
    Kids: ["Toys", "Prams and Walkers", "Kids Bikes"],
    Sports: ["Sports Equipments"],
  };

  return (
    <div className="post">
      <Container>
        <h1>Post Your Ad</h1>
        <Row>
          <Col>
            <div className="postCategories">
              <ListGroup>{mainCat}</ListGroup>
            </div>
          </Col>
          <Col>
            <div className="postCategories">
                <h2>this is </h2>
              <ListGroup>{subCategory} this</ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Post;
