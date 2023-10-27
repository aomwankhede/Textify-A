// eslint-disable-next-line 
export default (state,action) => {
    switch(action.type){
        case "toggle":
            return {...state,isLoggedIn:action.payload};
        default:
            return state;
    }
}