import axios from "axios";
import url from './url';

const endpoint = `${url}`;

export async function getCompanies() {
    let response = await axios.get(`${endpoint}/companies`);
    return await response.data
}

export default {
    getCompanies
}