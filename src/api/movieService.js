import axios from 'axios';

const API_KEY = '8878667ebeb672882c30a568e9dc376e';
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch popular moviesa
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};