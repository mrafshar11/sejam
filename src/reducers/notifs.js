export const notifReducers = (state = [], action) => {
    switch (action.type) {
        case "INIT_NOTIS":
            return [...action.payload]
        default:
            return state;
    }
}