/**
 * @prettier
 *
 */

import axios, { AxiosRequestConfig } from 'axios';

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 30000,
  headers: {
    accept: 'application/json',
  },
};

// create axios instances.
const axiosInstance = axios.create(DEFAULT_API_CONFIG);

// export instances.
export default axiosInstance;
