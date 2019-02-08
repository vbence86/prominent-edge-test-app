import RESTClient from './RESTClient';

/**
 * Richmond Parcel Client object that represent a connection to the
 * http://gis.richmondgov.com/ArcGIS/rest/services/StatePlane4502/Ener/MapServer/0/ endpoint
 */
function ParcelClient() {
  const serviceURL = 'http://gis.richmondgov.com/ArcGIS/rest/services/StatePlane4502/Ener/MapServer/0/';
  const client = RESTClient.connect({ endpoint: serviceURL });

  return {
    currentAt: function(options) {
      const { lat, lng } = options;
      const data = {
        geometry: { 
          x: lat,
          y: lng,
          spatialReference: { wkid : 4326 }
        },
        geometryType: 'esriGeometryPoint',
        spatialRel: 'esriSpatialRelContains',
        returnCountOnly: false,
        returnIdsOnly: false,
        returnGeometry: true,
        f: 'json',
      };
      
      return client.post('/query', data);
    },
  };

}

/**
 * Exposing the API to the shared context 
 * @type {object}
 */
export default {
  /**
   * Returns an instance of a ParcelClient
   * @param {string} endpoint Endpoint of the Gift service
   * @return {object} Instance of the ParcelClient 
   */
  connect(){
    return new ParcelClient();
  }
};