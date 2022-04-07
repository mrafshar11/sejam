import http from "./httpServices";
import config from "./config.json";


export const getNotifs = () => {
    return http.get(`${config.localapi}/notif`)
}