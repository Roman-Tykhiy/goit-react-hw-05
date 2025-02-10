import axios from 'axios';

const API_KEY = `ilIAntpK_nFpR_ep_xy-ARsothDVATzTkwHo_uZF0VI`;
export const fetchImages = async (query, page, perPage = 18) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?`, {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: perPage,
      order_by: `views`,
      orientation: `landscape`,
    },
  });
  return response.data;
};