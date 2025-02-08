import { combineReducers } from "redux";
import { userData } from './user';

const Reducers = combineReducers({
    userDataState: userData,
});

export default Reducers;
