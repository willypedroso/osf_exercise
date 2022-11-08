/**
 * Metadata for the getWeatherAction action.
 */
export const getWeatherAction = {
  name: 'getWeatherAction',
  // Action's description
  description: 'Description for getWeatherAction',
  author: 'Willyng',
  // This action uses a Saga to invoke an endpoint.
  endpoints: ['getWeather'],
  // The path to Json schema representing the request Json structure and the example of payload.
  input: '@exercicio_osf/osf_custom_storefront/src/plugins/actions/get-weather-action/schema/input.json',
  packageId: '@exercicio_osf/osf_custom_storefront'
};
