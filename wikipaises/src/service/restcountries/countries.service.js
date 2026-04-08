// src/service/restcountries/countries.service.js
import { api } from './countries.api.js';

export const CountriesService = {
  // 1. Busca todos os países (CORRIGIDO: adicionamos o ?fields=...)
  getAll: async () => {
    const response = await api.get('/all?fields=cca3,flags,name,region');
    return response.data;
  },

  // 2. Busca países por continente
  getByRegion: async (region) => {
    const response = await api.get(`/region/${region}?fields=cca3,flags,name,region`);
    return response.data;
  },

  // 3. Busca países por texto
  getByName: async (name) => {
    const response = await api.get(`/name/${name}?fields=cca3,flags,name,region`);
    return response.data;
  },

  // 4. Busca um país específico pelo código (Para a tela Detail)
  getByCode: async (code) => {
    const response = await api.get(`/alpha/${code}`);
    return response.data;
  }
};