import React from "react";
import { Container } from "reactstrap";
import MyNav from "../../components/MyNav";

const Header = (props) => {
  return (
    <div style={{ backgroundColor: "#F7F8F9" }} className="">
      <Container className="themed-container">
        <MyNav />
      </Container>
    </div>
  );
};

export default Header;
