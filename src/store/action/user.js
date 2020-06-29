import { Firebase } from '../../firebase/firebase'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS,LOGOUT_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, VERIFY_REQUEST, VERIFY_SUCCESS } from "../const";


const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST
  }
}

const signupSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    user
  }
}

const signupError = () => {
  return {
    type: SIGNUP_FAILURE
  }
}

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  }
}

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const signUp = (email, password) => async dispatch => {
  dispatch(signupRequest())
  try {
    Firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        Firebase.auth().onAuthStateChanged((user) => {
          user.sendEmailVerification()
        })
      })
      .then(data => {
        Firebase.auth().onAuthStateChanged(user => {
          if (user.emailVerified) {
            dispatch(signupSuccess(user))
          } else {
            dispatch(signupError())
          }
        })
      })
      .catch(err => {
        dispatch(signupError())
      })
  } catch (err) {
    dispatch(signupError())
  }
}

export const login = (email, password) => async dispatch => {
  dispatch(loginRequest())
  try {
    const user = await Firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    dispatch(loginSuccess(user))
  } catch (err) {
    dispatch(loginError())
  }
}

export const logout = () => async dispatch => {
  dispatch(logoutRequest())
  try {
    Firebase
      .auth()
      .signOut()

    dispatch(logoutSuccess())
  } catch (err) {
    dispatch(logoutError())
  }
}

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest())
  Firebase
    .auth()
    .onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(loginSuccess(user))
      }
      dispatch(verifySuccess())
    })
}