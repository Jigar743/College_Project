import {
  PHONE_USER_STORE,
  PHONE_VERIFY_FAILURE,
  PHONE_VERIFY_SUCCESS,
  PHONE_NUMBER_CHANGE,
  USER_INFO,
  GET_IDTOKEN,
  SELLER_INFO_ADD,
  SELLER_PHONE_ADD,
  SELLER_INFO_FETCH,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from "../actions/auth";

const initialState = {
  seller_info_add: false,
  currentUserInfo: [],
  phoneVerifyErrorMsg: "",
  phoneVerified: false,
  PhoneVerifyUser: "",
  signupErrorMsg: "",
  signupSuccessMessage: "",
  logoutErrMsg: "",
  currentUserDataFetch: false,
  seller_phone_add: false,
  isSignup: false,
  isSellerInfoFetch: false,
  signupError: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  user: {},
  id_Token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IDTOKEN:
      console.log(action.idToken);
      return {
        ...state,
        id_Token: action.idToken,
      };
    case SELLER_INFO_FETCH:
      return {
        ...state,
        isSellerInfoFetch: true,
      };
    case SELLER_PHONE_ADD:
      return {
        ...state,
        seller_phone_add: true,
      };
    case SELLER_INFO_ADD:
      return {
        ...state,
        seller_info_add: true,
      };
    case USER_INFO:
      return {
        ...state,
        currentUserInfo: action.user,
        currentUserDataFetch: true,
      };
    case PHONE_USER_STORE:
      return {
        ...state,
        PhoneVerifyUser: action.user,
      };
    case PHONE_VERIFY_FAILURE:
      return {
        ...state,
        phoneVerifyErrorMsg: action.message,
      };
    case PHONE_NUMBER_CHANGE:
      return {
        ...state,
        PhoneVerifyUser: "",
      };
    case PHONE_VERIFY_SUCCESS:
      return {
        ...state,
        phoneVerified: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupError: true,
        signupErrorMsg: action.message,
        user: action.user,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignup: true,
        signupError: false,
        signupSuccessMessage: action.message,
        user: action.user,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case LOGIN_SUCCESS:
      let currentUser = action.user;
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: currentUser,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: true,
        isAuthenticated: false,
        user: {},
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
        logoutErrMsg: action.msg,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
