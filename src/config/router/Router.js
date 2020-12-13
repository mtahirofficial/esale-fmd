import React from 'react'
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "../../containers/Home";
import Login from "../../containers/Login";
import Header from "../../containers/Header";
import { connect } from "react-redux";
import CategoriesList from "../../components/CategoriesList";
import AddPost from '../../components/AddPost';
const Router = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <CategoriesList />
      <Route exact path="/post" component={AddPost} />
    </BrowserRouter>
  );
};

const mapStateToProps = (store) => ({
  user: store,
});

export default connect(mapStateToProps, null)(Router);
