export default (store, widgetConfig) => {
    return store.endpoint('getWeather', {city: widgetConfig.initialCity,country: widgetConfig.initialCountry});
  };