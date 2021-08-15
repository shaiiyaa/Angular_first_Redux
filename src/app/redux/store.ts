import { combineReducers, createStore } from "redux";
import { authReducer } from "./auto-state";
import { cutegoriesReducer } from "./cutegories-state";
import { productsReducer } from "./products-state";
import { workersReducer } from "./workers-state";


const reducers = combineReducers({ 
    productsState: productsReducer,
    workersState: workersReducer,
    authState: authReducer,
    cutegoriesState: cutegoriesReducer
});
const store = createStore(reducers);

export default store;