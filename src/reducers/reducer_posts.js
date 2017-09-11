import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_POST:
            // If state object has key that matches post key payload, omit it and return a new object that does not include that id
            return _.omit(state, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // return newState;
            return {...state, [action.payload.data.id]: action.payload.data};
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;    
    }
}