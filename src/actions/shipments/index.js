import axios from '../../config/axios';

export const loadItem = (id) => {
  return async () => {
    const value = await axios.get(`/store/api/shipments/${id}?token=true`);
    return value.data;
  };
};
