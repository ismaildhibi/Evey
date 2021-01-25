import axios from 'axios';

const createaxios =()=>{
const params ={baseURL :'http://localhost:1337',}
return axios.create(params)
};

export const fetchEvents = async ()=>{
    const {data} = await createaxios().get('/events')
    return data;
}