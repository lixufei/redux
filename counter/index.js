import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'


const INCCREAMENT = 'INCCREAMENT';
const DECCREAMENT = 'DECCREAMENT';


let reducer = (state = 0, action) => {
    return action.type === INCCREAMENT ? state + 1 : state - 1;
}

let store = createStore(reducer);

window.increase = (e) => {
    store.dispatch({
        type: INCCREAMENT
    });
}

window.decrease = (e) => {
    store.dispatch({
        type: DECCREAMENT
    });
}

store.subscribe(() => {
  document.getElementById('state_container').innerHTML = store.getState();
});
