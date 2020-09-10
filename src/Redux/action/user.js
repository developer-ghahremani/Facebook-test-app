import { auth } from "../../firebase";
import firebase from "firebase";
import { SET_USER, SET_PROGRESS } from "../type";

export const getUser = () => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_PROGRESS, payload: !getState().progress });
    const cred = JSON.parse(localStorage.getItem("credential"));
    const googleCred = new firebase.auth.GoogleAuthProvider.credential(
      cred.oauthIdToken,
      cred.oauthAccessToken
    );
    try {
      const { user } = await auth.signInWithCredential(googleCred);
      dispatch({ type: SET_USER, payload: user });
    } catch ({ message }) {
      console.log(message);
    } finally {
      dispatch({ type: SET_PROGRESS, payload: !getState().progress });
    }
  };
};
