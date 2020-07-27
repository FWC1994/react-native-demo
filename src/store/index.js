
  
import { createStore, combineReducers } from 'redux'
import counter from './counter/reducer';

// const reducer = combineReducers({
//     counter,
// })

const store = createStore(
    counter
)

export default store;