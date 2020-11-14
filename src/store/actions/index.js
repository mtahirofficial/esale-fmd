import firebase from '../../config/firebase/firebase'
import actionTypes from '../constants/Constants'

export const facebook_login = () => {
    return(dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("chal raha hai...", user, token)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("Error Code is " + errorCode + ", error email is " + email + ", error credential is " + credential + " and error message is " + errorMessage)
          });
        dispatch({
            type: actionTypes.userLogin,
            payload: "payload"
        })
    }
}
