// api.js
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

export async function postApiCall(url, body, token) {
  try {
    const res = await axios.post(url, body, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res;
  } catch (error) {
    console.error('Error fetching employee detail:', error);
    throw error;
  }
}
