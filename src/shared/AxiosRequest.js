import axios from "axios";
import Cookies from "universal-cookie";


const instance = axios.create({
    baseURL: 'https://idontcare.shop',
});
const cookie = new Cookies();
instance.defaults.headers.common["Authorization"] = 'Bearer ' + cookie.get('member');
export default instance;