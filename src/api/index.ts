import { JediResponse, JedisResponse } from '../types';
import axios from './axios';

export const fetchJedis = (): Promise<JedisResponse> =>
  axios.get('http://swapi.dev/api/people').then((res) => res.data);

export const fetchJedi = (id: string): Promise<JediResponse> =>
  axios
    .get(`http://swapi.dev/api/people/${id}`)
    .then((res) => ({
      status: res.status,
      data: res.data,
      error: null,
    }))
    .catch((err) => ({
      status: err.response.status,
      error: err.response.data,
      data: null,
    }));
