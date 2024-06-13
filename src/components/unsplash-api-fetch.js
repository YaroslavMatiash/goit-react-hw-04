import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = '79OsziWftLj1WPTym_2qANNopsvO749a6oURmFHRNck';

export default async function getPhotos(searchQuery, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return response.data;
}
