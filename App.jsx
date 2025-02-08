import Index from './Index'
import { Proivder, Provider } from 'react-redux'
import rootReducer from './redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App(){
    return(
        <Provider store={store}>
            <Index></Index>
        </Provider>
    )
}