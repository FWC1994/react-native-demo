import initialState from './store';
import { INCREMENT, DECREMENT } from './types';
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.num
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.num
            }
        default:
            return state
    }
}