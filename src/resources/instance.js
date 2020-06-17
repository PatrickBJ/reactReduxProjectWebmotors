import axios from 'axios'

const BASE_URL = "http://desafioonline.webmotors.com.br/api/OnlineChallenge/";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000
})

export default instance