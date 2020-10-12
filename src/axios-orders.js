import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-f614d.firebaseio.com/'
});

export default instance;