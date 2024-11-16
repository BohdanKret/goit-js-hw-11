const API_KEY = '47077986-634596916a6757457166893bd';
const BASE_URL = `https://pixabay.com/api/`;

export default function dataRequest(userRequest) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: `${userRequest}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
