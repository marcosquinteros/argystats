import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dolarapi.com/v1',
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



