export const getWeatherRepository = state => state.weatherRepository || {};

/**
 * Selector to extract repositories.tables from a state object.
 */
export const getWeatherQuery = state => getWeatherRepository(state).weatherQuery || {};

/**
 * Selector to extract repositories.tables.properties from a state object.
 */
export const getWeather = state => getWeatherQuery(state).weather || {};