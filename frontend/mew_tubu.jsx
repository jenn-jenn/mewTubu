import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// DEBUGGING PURPOSES
// import {signup, login, logout} from './actions/sessions/session_actions'; 

document.addEventListener("DOMContentLoaded", () => {
    
    const root = document.getElementById("root");
    let store;

    if(window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser 
                }
            },
            session: { 
                currentUserId: window.currentUser.id
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // DEBUGGING PURPOSES
    // let id = store.getState().session.currentUserId;
    // if(id) {
        // console.log(store.getState().entities.users[id])
    // }

    ReactDOM.render(<Root store={store} />, root);
});