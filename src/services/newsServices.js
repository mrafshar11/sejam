import http from "./httpServices";
import config from "./config.json";


export const getNews = () => {
    return http.get(`${config.localapi}/news`)
}