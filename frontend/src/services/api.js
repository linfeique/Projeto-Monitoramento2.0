import axios from 'axios';

function api(){
    axios.create({
        baseURL: 'http://localhost:5000/api/'
    })
}

export default api;