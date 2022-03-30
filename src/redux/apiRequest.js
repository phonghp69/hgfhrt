import axios from "axios";
import { loginStart,loginSuccess,loginFailed } from "./authSlice";
export const loginUser = async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try{
        const res = axios.post("/Users/Authenticate",user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    }catch(err){
        dispatch(loginFailed());

    }
}