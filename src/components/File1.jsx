import { createStore } from "redux";

const initialstate={
  balance:"",
  mobileNo:"null",
user:""
}
function usereduser(state=initialstate,action){
if(action.type=="deposit")
return{ ...state,balance:state.balance+action.payload};
else return state
}

  const store= createStore(usereduser);

  console.log("get.store")
 store. dispatch({ type:Deposite,payload:1000})
 console.log("get.store")