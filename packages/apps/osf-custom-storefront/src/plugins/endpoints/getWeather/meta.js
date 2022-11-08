export default {
  name: 'getWeather',
  description: 'Description for getWeather',
  author: 'Willyng',
  // Add comment: 'Documentation link for underlying rest endpoint'
  serviceurl: '',
  // The path to Json schema representing the request Json structure and the example of payload.
  input: '@exercicio_osf/osf_custom_storefront/src/plugins/endpoints/getWeather/schema/input.json',
  // The json schema represents the redux states changes that will occur due to this reducer.
  // The json schema is expected to contain the state definition and an example.
  output: '@exercicio_osf/osf_custom_storefront/src/plugins/endpoints/getWeather/schema/output.json',
  packageId: ''
};
