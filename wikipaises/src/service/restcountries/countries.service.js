import { api } from './countries.api.js';

export const CountriesService = {

  getAll: async () => {
    const response = await api.get('/all?fields=cca3,flags,name,region');
    return response.data;
  },

  getByRegion: async (region) => {
    const response = await api.get(`/region/${region}?fields=cca3,flags,name,region`);
    return response.data;
  },

  getByName: async (name) => {
    const response = await api.get(`/name/${name}?fields=cca3,flags,name,region`);
    return response.data;
  },

  getByCode: async (code) => {
    const response = await api.get(`/alpha/${code}`);
    return response.data;
  }
};