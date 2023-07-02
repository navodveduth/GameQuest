import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ed95c133f4ef47b6bf828907f1200a9b',
  },
});
