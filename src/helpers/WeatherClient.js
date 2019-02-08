import RESTClient from './RESTClient';

/**
 * APIXU Client object that represent a connection to the implemented APIXU services
 */
function WeatherClient() {
  const APIKey = '40a6a154b89346f9a53154635190802';
  const serviceURL = `http://api.apixu.com/v1`;
  const client = RESTClient.connect({ endpoint: serviceURL });

  return {
    currentAt: function(options) {
      const { lat, lng } = options;
      return client.get('/current.json', {
        key: APIKey,
        q: `${lat},${lng}`,
      });
    },
  };
}

/**
 * Exposing the API to the shared context 
 * @type {object}
 */
export default {
  /**
   * Returns an instance of a WeatherClient
   * @param {string} endpoint Endpoint of the Gift service
   * @return {object} Instance of the WeatherClient 
   */
  connect(){
    return new WeatherClient();
  }
};