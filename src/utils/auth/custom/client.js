import { URL } from 'src/pages/constantes/data.jsx';
import api from '../../../api.js';
import axios from 'axios';
function generateToken() {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}
const user = {
  id: '489567',
  avatar: '/avatars/2.png',
  firstName: 'Clara',
  lastName: 'Martinez',
  email: 'example@uifort.com',
};
class AuthClient {
  async signUp(params) {

    const { name, email, password } = params;
    console.log(params)
    const response = await axios.post(`${URL}api/register`, { name, email, password });
    console.log(response);
    const token = response.data.access_token;
    localStorage.setItem('uifort-authentication', token);
    return {};
  }
  async signInWithOAuth(_) {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }
  async signInWithPassword(params) {
    const { email, password } = params;
    console.log(params)
    if (email !== 'example@uifort.com' || password !== 'DemoPass123') {
      return {
        error: 'Please ensure your credentials are correct',
      };
    }
    const token = generateToken();
    localStorage.setItem('uifort-authentication', token);
    return {};
  }
  async loginP(params){
    const { email, password } = params;
    const response = await axios.post(`${URL}api/login`, { email, password });
    console.log(response);
    if (response.status !== 200) {
      return {
        error: 'Please ensure your credentials are correct',
      };
    } 
    localStorage.setItem('uifort-authentication', response.data.access_token);     
    return {};
  }
  async resetPassword(_) {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }
  async updatePassword(_) {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }
  async getUser() {
    const token = localStorage.getItem('uifort-authentication');
    if (!token) {
      return {
        data: null,
      };
    }
    return {
      data: user,
    };
  }
  async signOut() {
    localStorage.removeItem('uifort-authentication');
    return {};
  }
}
export const authClient = new AuthClient();
