import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { getAllnotifs } from "../actions/notifs";
import { getAllnews } from "../actions/news";
import { reducers } from "../reducers/index";

export const store = createStore(reducers,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));


store.dispatch(getAllnotifs());
store.dispatch(getAllnews());


store.subscribe(() => { console.log(store.getState()) });