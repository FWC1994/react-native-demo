import axios from 'axios';
import config from '../config/config';

export default {
    async getList() {
        const prefix = '/m/banner';
        const url = `${config.host}${prefix}/getList`;
        return axios.get(url);
    }
}