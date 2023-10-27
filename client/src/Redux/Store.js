import {createStore} from 'redux';
import toggleRed from "./Reducers/toggleRed";


const configureStore = (state = {isLoggedIn:true}) =>{
    return createStore(toggleRed,state);
}

export default configureStore;