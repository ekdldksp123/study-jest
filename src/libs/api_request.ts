import axios from 'axios';

const BASE_URL = 'hehe';

interface Parameter {
    url: string;
    method: string;
    data: string;
    token: string;
}

export const getApiResponse = (props: Parameter) => {
    // const res = 
}