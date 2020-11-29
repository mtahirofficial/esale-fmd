import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { facebook_login, email_login } from "../store/actions/index";
import Slider from "./Slider";

import CustomButton from "./CustomButton";

const Account = (props) => {
  const [condition, setCondition] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);

  const {
    buttonLabel,
    className,
    color,
    icon,
    email_login,
    facebook_login,
  } = props;

  const toggle = () => setModal(!modal);

  const changeCondition = () => setCondition(!condition);

  const handleChangeMail = (e) => setMail(e.target.value);

  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <div style={{ display: "inline-block" }}>
      <CustomButton
        text={buttonLabel}
        icon={icon}
        color={color}
        handleClick={toggle}
        btnStyle={{ width: "95%" }}
      />
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <Slider imgWidth="50%" imgHeight="50%" />
        </ModalBody>
        <Row>
          <Col xs="12" className="text-center">
            {condition ? (
              <div>
                <input
                  className="emailInput mb-1"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChangeMail}
                />
                <br />
                <input
                  className="passwordInput"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChangePassword}
                />
                <br />
                <CustomButton
                  text="Next"
                  color="info"
                  handleClick={() => email_login(mail, password, buttonLabel)}
                  btnStyle={{ width: "25%" }}
                />
                {/* <CustomButton text='Next' color='info' btnWidth='150px' handleClick={continueWithEmail} btnStyle={{width: '25%' }} /> */}
                <CustomButton
                  text="Cancel"
                  color="danger"
                  handleClick={changeCondition}
                  btnStyle={{ width: "25%" }}
                />
                <hr />
              </div>
            ) : (
              <CustomButton
                text="Continue with Email"
                color="info"
                icon={faEnvelope}
                btnStyle={{ width: "50%" }}
                handleClick={changeCondition}
              />
            )}
          </Col>
          <Col xs="12" className="text-center">
            <CustomButton
              text="Continue with Facebook"
              color="info"
              handleClick={() => facebook_login()}
              icon={faFacebook}
              btnStyle={{ width: "50%" }}
            />
          </Col>
          <Col xs="12" className="text-center">
            <CustomButton
              text="Continue with Google"
              color="info"
              icon={faGoogle}
              btnStyle={{ width: "50%" }}
            />
          </Col>
        </Row>
        <div style={{ margin: "20px auto" }}>
          We won't share your personal information with anyone
        </div>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // changeStateToReducer: (currentUser) => {
  // dispatch(userLogin(currentUser))
  email_login: (mail, password, buttonLabel) => dispatch(email_login(mail, password, buttonLabel)),
  facebook_login: () => dispatch(facebook_login())

  // }
});

export default connect(null, mapDispatchToProps)(Account);
