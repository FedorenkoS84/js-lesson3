const axios = require("axios");

const createAxiosClient = (baseURL) => {
  const client = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // REQUEST interceptor
  client.interceptors.request.use(
    (config) => {
      console.log(`[REQUEST] ${config.method.toUpperCase()} ${config.url}`);
      return config;
    },
    (error) => Promise.reject(error),
  );

  // RESPONSE interceptor
  client.interceptors.response.use(
    (response) => {
      console.log(`[RESPONSE] ${response.status} ${response.config.url}`);
      return response;
    },
    (error) => {
      if (error.response) {
        console.error(`[ERROR] ${error.response.status} ${error.config.url}`);
      }
      return Promise.reject(error);
    },
  );

  return client;
};

module.exports = createAxiosClient;
