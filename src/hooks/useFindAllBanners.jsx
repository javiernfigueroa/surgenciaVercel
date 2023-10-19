import { useQuery } from 'react-query';


 const API_BASE_URL = 'http://localhost:3001/api';

const fetchBanners = async () => {
  const response = await fetch(`${API_BASE_URL}/banners`);
  if (!response.ok) {
    throw new Error('Error al obtener datos');
  }
  return response.json();
};

const useFindAllBanners = () => {
  const { data, isLoading } = useQuery('banners', fetchBanners);

  return {
    banners: data,
    isLoading,
  };
};

export default useFindAllBanners;
