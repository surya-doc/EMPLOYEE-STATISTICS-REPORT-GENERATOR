// api.js
import axios from 'axios';
import { backend_url } from '../../BackendRoute';

export async function getapiCall(url, token) {
  try {
    const res = await axios.get(url, {
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
