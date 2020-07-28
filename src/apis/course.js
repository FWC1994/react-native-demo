import axios from 'axios';
import config from '../config/config';

export default {
    async getCourses() {
        const prefix = '/m/course';
        const url = `${config.host}${prefix}/all`;
        return axios.get(url);
    }
}