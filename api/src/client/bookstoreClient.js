const createAxiosClient = require("./axiosClient");

const bookstoreClient = createAxiosClient("https://demoqa.com");

module.exports = bookstoreClient;
