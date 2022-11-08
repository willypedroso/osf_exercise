import {useEffect} from 'react';
import {getGlobalContext} from '@oracle-cx-commerce/commerce-utils/selector';
import {isEmptyObject} from '@oracle-cx-commerce/utils/generic';
import {getWeather} from '..';
import {getWeatherQuery} from '../../../../selectors';

/**
 * Custom hook
 *
 * @param {object} store The Store
 * @param {object} widgetConfig The Widget configuration values coming from Design Studio
 */
export default (store, widgetConfig) => {
  useEffect(() => {
    const {contextParam} = getGlobalContext(store.getState());

    // Detects if the site was populated in the state during server-side rendering
    if (isEmptyObject(getWeatherQuery(store.getState()))) {
      getWeather(store, {});
    }
  }, [store]);
};
