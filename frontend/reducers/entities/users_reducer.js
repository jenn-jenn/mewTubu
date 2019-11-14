import { RECEIVE_CURRENT_USER } from "../../actions/sessions/session_actions";
import { RECEIVE_ALL_USERS } from "../../actions/users/users_actions";


 const usersReducer = (state = {}, action) => {
     Object.freeze(state);
     switch(action.type) {
        case RECEIVE_CURRENT_USER:
             let user = action.user;
            return Object.assign({}, state, { [user.id]: user} );
         case RECEIVE_ALL_USERS:
             debugger
             return action.users
        default:
            return state;
     }
 };

 export default usersReducer; 