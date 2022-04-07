import { getNotifs } from "../services/notifServices";

export const getAllnotifs = () => {
    return async (dispatch) => {
        const { data } = await getNotifs();
        console.log(data);
        await dispatch({ type: "INIT_NOTIS", payload: data.notifs });
    }
}