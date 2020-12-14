import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  ButtonDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import Logo from "./Logo";
import Search from "./Search";
import Account from "./Account";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logOutUser } from "../store/actions/index";
import {
  faAd,
  faComment,
  faPlus,
  faQuestionCircle,
  faSignInAlt,
  faSignOutAlt,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import CustomLink from "./Link";

const MyNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light expand="md">
        <CustomLink
          linkStyle={{padding: '0px 8px'}}
          to="/"
          text={<Logo height="44px" width="130px" to="/" />}
        />
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Search />
            </NavItem>

            <ButtonDropdown
              style={{ fontSize: "27px" }}
              nav
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle caret nav color="info">
                Username
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <div>
                    <p style={{ color: "#5C7A7D", marginBottom: "0px" }}>
                      Hellow,
                    </p>
                    <h5>Username</h5>
                    <p
                      style={{
                        textDecoration: "underline",
                        fontSize: "12px",
                      }}
                    >
                      View and edit profile
                    </p>
                  </div>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <FontAwesomeIcon icon={faPlus} />{" "}
                  <CustomLink
                    to="/post"
                    text="Sell"
                    linkStyle={{ textDecoration: "none" }}
                  />{" "}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <FontAwesomeIcon icon={faAd} /> My Ads
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faComment} /> Chats
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <FontAwesomeIcon icon={faQuestionCircle} /> help
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faSlidersH} /> Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={props.logOUtUser}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logut
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <NavItem>
              <Account
                buttonLabel="Login"
                color="secondary"
                icon={faSignInAlt}
              />
              <Account buttonLabel="Signup" color="info" icon={faSignOutAlt} />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logOUtUser: () => dispatch(logOutUser()),
  // return ({
  //     changeStateToReducer: (user) => {
  //         dispatch(logOutUser(user))
  //     }
  // })
});

export default connect(null, mapDispatchToProps)(MyNav);
