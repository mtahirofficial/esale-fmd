import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import CustomLink from "./CustomLink";

const categories = [
  {
    to: "/mobile-phones",
    text: "Mobile Phones",
  },
  {
    to: "/cars",
    text: "Cars",
  },
  {
    to: "/motorcycles",
    text: "Motor Cycles",
  },
  {
    to: "/houses",
    text: "Houses",
  },
  {
    to: "/tv-video-audio",
    text: "TV-Video-Audio",
  },
  {
    to: "/tablets",
    text: "Tablets",
  },
  {
    to: "/lands-and-plots",
    text: "Lands & Plots",
  },
];

function CategoriesList(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const categoriesList = categories.map((category, index) => {
    return (
      <NavItem key={index}>
        <CustomLink
          linkStyle={{ color: "#138496", padding: "10px" }}
          to={category.to}
          text={category.text}
        />
      </NavItem>
    );
  });
  return (
    <div className="mb-3">
      <Container className="themed-container">
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                {categoriesList}
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default CategoriesList;
