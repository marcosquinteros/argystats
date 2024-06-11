import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dolarapi.com/v1',
});

const options = {
  method: 'GET',
  url: 'https://riesgo-pais.p.rapidapi.com/api/riesgopais',
  headers: {
    'x-rapidapi-key': '44f33b0f3dmsh41f8b9f5124aea3p1cfd39jsn494002689392',
    'x-rapidapi-host': 'riesgo-pais.p.rapidapi.com'
  }
};

const API_TOKEN = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDk2NjMyMzIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJtbXdhcmNvc0BnbWFpbC5jb20ifQ.v7rotivA6buNd4f4iJUsrHuO6mm-9Q9JoFn07zjLHAPoK5B7NVzk-LIOjL6-h_Z6r56lgpOUPjwKA40MR5K7IA';
const BASE_URL = 'https://api.estadisticasbcra.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `BEARER ${API_TOKEN}`,
  },
});


export const getDolarOficial = async () => {
  const response = await api.get('/dolares/oficial');
  return response.data;
};

export const getDolarBlue = async () => {
  const response = await api.get('/dolares/blue');
//   const data = response.json()
  return response.data;
};

export const getDolares = async () => {
  const response = await api.get('/dolares');
  return response.data;
};


export const getRiesgoPais = async () => {
  const response = await axios.request(options);
  return response.data;
};

export const getReservas = async () => {
  try {
    const response = await apiClient.get('/reservas');
    console.log(response)
    return response.data;
    
  } catch (error) {
    return error.message;
  }
};




