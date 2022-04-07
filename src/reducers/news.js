export const newsReducers = (state = [], action) => {
    switch (action.type) {
        case "INIT_NEWS":
            return [...action.payload]
        default:
            return state;
    }
}