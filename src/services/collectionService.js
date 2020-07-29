import Axios from 'axios';
const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/collection' : '//localhost:3030/api/collection';
const axios = Axios.create({
    withCredentials: true
});

export default{
    query,
    save,
    get,
    remove
}

function query() {
    return axios.get(`${BASE_URL}/leads`)
}

function save(lead) {
    let prm;
    if (lead._id) {
        prm = axios.put(`${BASE_URL}/${lead._id}`, lead)
    } else {
        prm = axios.post(BASE_URL, lead)
    }
    return prm.then(res => res.data)
    
}

function get(id) {
    return axios.get(`${BASE_URL}/leads/${id}`)
}

function remove(id) {
    return axios.delete(`${BASE_URL}/leads/${id}`)
}


