import store from '@store';
import axios from 'axios';
import Config from 'react-native-config';

//edit url in file .env
//axios.defaults.baseURL = Config.URL_API_STAGING;
axios.defaults.baseURL = Config.URL_API_PRODUCT;

const getDataBody = config => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }

  return data;
};

//TODO: REQUEST
axios.interceptors.request.use(
  config => {
    const data = getDataBody(config);
    if (__DEV__) {
      console.log(
        `%c [REQUEST] ${config?.url}`,
        'color: #458B00; font-weight: bold',
        config,
      );
    }

    return {...config, data};
  },
  error => {
    return Promise.reject(error);
  },
);

//TODO: RESPONSE
axios.interceptors.response.use(
  response => {
    if (__DEV__) {
      console.log(
        `%c [RESPONSE] ${response.config.url}`,
        'color: #CD950C; font-weight: bold',
        {dataHeader: response.config.data},
        {paramsHeader: response.config.params},
        JSON.stringify(response.data, null, 2),
      );
    }

    return response;
  },
  error => {
    if (__DEV__) {
      console.log(
        `%c [RESPONSE ERROR] ${error.config.url}`,
        'color: #EE3B3B; font-weight: bold',
        error?.response,
      );
    }

    return Promise.reject(error);
  },
);

const Api = () => {
  const generateHeader = headers => {
    const token = store.getState().token.data;
    let options = {
      'Content-Type': headers || 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    };
    if (token !== null) {
      options = {
        ...options,
        Authorization: `Bearer ${token}`,
      };
    }
    return options;
  };

  return {
    get: async (url, params) => {
      try {
        return await axios
          .get(url, {
            headers: {get: generateHeader()},
            params,
          })
          .then(response => response.data);
      } catch (error) {
        throw error.response;
      }
    },
    post: async (url, data, params) => {
      try {
        return await axios
          .post(url, data, {
            headers: {post: generateHeader()},
            params,
          })
          .then(response => response.data);
      } catch (error) {
        throw error.response;
      }
    },
    put: async (url, data, params) => {
      try {
        return await axios
          .put(url, data, {
            headers: this.generateHeader(),
            params,
          })
          .then(response => response.data);
      } catch (error) {
        throw error.response;
      }
    },
    patch: async (url, data, params) => {
      try {
        return await axios
          .patch(url, data, {
            headers: this.generateHeader(),
            params,
          })
          .then(response => response.data);
      } catch (error) {
        throw error.response;
      }
    },
    delete: async (url, params) => {
      try {
        return await axios
          .delete(url, {
            headers: this.generateHeader(),
            params,
          })
          .then(response => response.data);
      } catch (error) {
        throw error.response;
      }
    },
  };
};

export default Api;
