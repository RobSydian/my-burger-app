import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-446ac.firebaseio.com/'
});

export default instance;
