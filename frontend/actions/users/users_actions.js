import * as UsersAPIUtil from '../../util/users_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

export const fetchAllUsers = () => (dispatch) => {
    return UsersAPIUtil.fetchUsers().then( (users) => {
        return dispatch(receiveAllUsers(users))
    })
}