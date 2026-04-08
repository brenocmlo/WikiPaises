// src/service/restcountries/countries.service.js
import { api } from './countries.api.js';

export const CountriesService = {
  // 1. Busca todos os países (Para a tela Home inicial)
  getAll: async () => {
    const response = await api.get('/all');
    return response.data;
  },

  // 2. Busca países por continente (Para o filtro Select)
  getByRegion: async (region) => {
    const response = await api.get(`/region/${region}`);
    return response.data;
  },

  // 3. Busca países por texto (Para a barra de pesquisa)
  getByName: async (name) => {
    const response = await api.get(`/name/${name}`);
    return response.data;
  },

  // 4. Busca um país específico pelo código (Para a tela Detail)
  getByCode: async (code) => {
    const response = await api.get(`/alpha/${code}`);
    return response.data;
  }
};