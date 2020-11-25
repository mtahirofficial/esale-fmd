import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Header from '../../containers/Header';
import { connect } from 'react-redux'
const Router = (props) => {
    // console.log(props.user)
    let token;
    if(props.user.length > 0){
        token = props.user[0].token
    } else {
        console.log(props.user)
    }
    return(
        <BrowserRouter>
            <Header />
            <Route exact path='/' render = {() => {
                token ? <Home /> : <Redirect to='/login' />
            }} />
            <Route exact path='/login' component={Login} />
        </BrowserRouter>
    )
}

const mapStateToProps = (store) => ({
    user: store
})

export default connect(mapStateToProps, null)(Router)