import { getNews } from "../services/newsServices";

export const getAllnews = () => {
    return async (dispatch) => {
        const { data } = await getNews();
        console.log(data);
        await dispatch({ type: "INIT_NEWS", payload: data.news });
    }
}