import { combineReducers } from "redux";

import { notifReducers } from "./notifs";
import { newsReducers } from "./news";

export const reducers = combineReducers({
    notifs: notifReducers,
    news: newsReducers
})