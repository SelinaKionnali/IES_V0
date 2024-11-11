// src/utils/apiService.js
import BASE_URL from '../Utilities/apiConfig';

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/data`); // Calls http://localhost:3000/api/data
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json(); // Get JSON data from response
    return data; // Return this data to wherever fetchData was called
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};