import { authType } from "@/types/authType";


const initialAuthState:authType={
    isAuthenticated: false,
  user: null,
  error: null,
  token:null,
  loading: false,
}

const authReducer=(state=initialAuthState,action:any)=>{

    switch (action.type) {
        case 'LOGIN_REQUEST':
          return {
            ...state,
            loading: true,   
            token:null,
            error: null,
          };
        case 'LOGIN_SUCCESS':
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
            token:action.payload.token,
            error: null,
            loading: false,
          };
        case 'LOGIN_FAILURE':
          return {
            ...state,
            isAuthenticated: false,
            user: null,
            error: action.payload,
            loading: false,
          };
        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false,
            user: null,
            error: null,
            loading: false,
          };
        default:
          return state;
      }
    }

export default authReducer;