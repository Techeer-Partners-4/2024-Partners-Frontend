import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // API 서버의 기본 URL을 설정합니다.
});

export default instance;