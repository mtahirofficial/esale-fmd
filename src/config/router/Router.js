import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "../../containers/Home";
import Login from "../../containers/Login";
import Header from "../../containers/Header";
import { connect } from "react-redux";
import CategoriesList from "../../components/CategoriesList";
import Post from "../../components/Post";
const Router = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <CategoriesList />
      <Route exact path="/post" render={Post} />
    </BrowserRouter>
  );
};

const mapStateToProps = (store) => ({
  user: store,
});

export default connect(mapStateToProps, null)(Router);
