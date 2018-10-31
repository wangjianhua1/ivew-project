import axios  from '../api'

export const  login= params=>axios.get('login',params).then(res=>{return res.data});

